import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import matrix from "../../Assets/matrixtheme.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/Bs";

const style = {
  fontSize: 30,
};

function EntryAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Main>
      <Div onClick={playPause}>
        {isPlaying ? (
          <BsPausAiFillPlayCircleeFill style={style} />
        ) : (
          <AiFillPauseCircle style={style} />
        )}
      </Div>
      <audio ref={audioRef}>
        <source src={matrix} type="audio/mp3" />
      </audio>
    </Main>
  );
}

const Main = styled.main`
  position: absolute;
  left: 15px;
  opacity: 0.3;
  top: 15px;
  transition: 0.3s;
  width: auto;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Div = styled.div`
  cursor: pointer;
  height: auto;
  color: white;
  width: auto;
`;

export default EntryAudio;