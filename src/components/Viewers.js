import React from 'react';
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
          <img src="images/viewers-disney.png" alt="disney"/>
          <video autoPlay={true} playsInline={true} loop={true}>
            <source src="videos/disney.mp4" type="video/mp4"/>
          </video>
      </Wrap>

      <Wrap>
          <img src="images/viewers-pixar.png" alt="pixar"/>
          <video autoPlay={true} playsInline={true} loop={true}>
            <source src="videos/pixar.mp4" type="video/mp4"/>
          </video>
      </Wrap>

      <Wrap>
          <img src="images/viewers-marvel.png" alt="Marvel"/>
          <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
          <img src="images/viewers-starwars.png" alt="Star-wars"/>
          <video autoPlay={true} playsInline={true} loop={true}>
            <source src="videos/star-wars.mp4" type="video/mp4"/>
          </video>
      </Wrap>

      <Wrap>
          <img src="images/viewers-national.png" alt="National-Geo"/>
          <video autoPlay={true} playsInline={true} loop={true}>
            <source src="videos/national-geographic.mp4" type="video/mp4"/>
          </video>
      </Wrap>     
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
  padding-top: 56.25%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.25, 0.94) 0s;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    position: absolute;
    inset: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: block;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
  }

  video {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rbg(0, 0, 0, / 72%) 0px 30px 22px -10px;

    border-color: rgba( 249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }


`

export default Viewers
