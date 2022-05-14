import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import DisneyPlusMoviesData from "../app/DisneyPlusMoviesData.json";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import Originals from "./Originals";

function Home() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const db = DisneyPlusMoviesData.movies;
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  React.useEffect(() => {
    Object.values(db)?.map((item) => {
      // let name = item.title;
      switch (item.type) {
        case "recommend":
          recommends = [...recommends, { id: Math.random(), ...item }];
          break;
        case "new":
          newDisneys = [...newDisneys, { id: Math.random(), ...item }];
          break;
        case "original":
          originals = [...originals, { id: Math.random(), ...item }];
          break;
        case "trending":
          trendings = [...trendings, { id: Math.random(), ...item }];
          break;
      }
      
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trendings,
      })
    );
  }, [userName]);

  // console.log(recommends);
  // console.log(newDisneys);
  // console.log("original: " + original);
  // console.log("trending: " + trending);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  top: 72px;
  display: block;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);

  &:after: {
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    content: "";
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
