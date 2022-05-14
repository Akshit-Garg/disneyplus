import React from "react";
import { useParams } from "react-router-dom";
import DisneyPlusMoviesData from "../app/DisneyPlusMoviesData.json";
import styled from "styled-components";

function Detail() {
  const db = DisneyPlusMoviesData.movies;
  const {id} = useParams();
  const [detailData, setDetailData] = React.useState({});

  React.useEffect(() => {
    Object.values(db)?.map((film) => {
      if(film.key === (id)){
        setDetailData(film);
      }
      return setDetailData;
    })    
  })

  return (
    <Container>
      <Background>
        <img
          src={detailData.backgroundImg}
          alt={detailData.title}
        />
      </Background>

      <ImageTitle>
        <img
          src={detailData.titleImg}
          alt={detailData.title}
        />
      </ImageTitle>

      <MetaContent>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play-movie-button" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="play-trailer-button" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="Group-watch" />
            </div>
          </GroupWatch>
        </Controls>
        <Subtitles>{detailData.subTitle}</Subtitles>
        <Description>{detailData.description}</Description>
      </MetaContent>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: block;
  overflow-x: hidden;
  top: 72px;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  opacity: 0.8;
  z-index: -1;
  left: 0;
  top: 0;
  right: 0;

  img {
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0 auto;
  padding-bottom: 24px;
  -webkit-box-pack: start;
  height: 30vw;
  min-height: 170px;
  width: 100%;

  img {
    width: 35vw;
    min-width: 200px;
    max-width: 600px;
  }
`;

const MetaContent = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  height: 56px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding: 0 24px;
  margin: 0px 22px 0px 0px;
  color: rgb(0, 0, 0);
  background: rgb(249, 249, 249);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 12px;
    margin: 0 10px 0 0;
    padding: 0 12px;

    img {
      width: 22px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  height: 44px;
  width: 44px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rbga(0, 0, 0, 0.6);
  border: 2px solid white;
  border-radius: 50%;

  span {
    display: inline-block;
    background-color: rgb(249, 249, 249);

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: white;
  border-radius: 50%;

  div {
    border-radius: 50%;
    background: rgb(0, 0, 0);
    height: 40px;
    width: 40px;

    img {
      width: 100%;
    }
  }
`;

const Subtitles = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Description = styled.div`
  font-size: 20px;
  color: rgb(249, 249, 249);
  line-height: 1.4;
  padding: 16px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export default Detail;
