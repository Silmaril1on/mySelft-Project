import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import django from "../../Assets/django_instrumental.mp3";
import play from "../../Assets/play.png";
import pause from "../../Assets/pause.png";

const style = {
  fontSize: 30,
};

function FixedButtons() {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef();

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Main>
      <Div onClick={playPause}>
        {isPlaying ? (
          <Img src={pause} alt="pause" />
        ) : (
          <Img src={play} alt="play" />
        )}
        <audio ref={musicRef}>
          <source src={django} type="audio/mp3" />
        </audio>
      </Div>
      <Bookmark href="#info">info</Bookmark>
      <Bookmark href="#university">university</Bookmark>
      <Bookmark href="#jobs">jobs</Bookmark>
    </Main>
  );
}

const Main = styled.main`
  align-items: end;
  border-right: 2px solid #cccccca7;
  background-color: #0000003e;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: end;
  padding: 5px;
  right: 5px;
  position: fixed;
  width: 100px;
  z-index: 22;
`;

const Div = styled.div`
  color: white;
  cursor: pointer;
  height: auto;
  opacity: 0.5;
  transition: 0.3s ease;
  width: auto;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Bookmark = styled.a`
  border: none;
  background-color: transparent;
  color: white;
  font: bold 0.5rem semplicitapro;
  margin: 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s ease;
  opacity: 0.5;
  z-index: 222;
  &:hover {
    cursor: pointer;
    font-size: 0.7rem;
    opacity: 1;
  }
`;

const Img = styled.img`
  height: 15px;
  width: 15px;
`;

export default FixedButtons;