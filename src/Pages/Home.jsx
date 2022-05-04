import React from "react";
import styled from "styled-components";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";

const Home = () => {
  return (
    <Container>
      <div className="left"></div>
      <div className="middle">
        <CreatePost />
        <Post />
      </div>
      <div className="right"></div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;

  grid-template-columns: 30% 30% 30%;
`;

export default Home;
