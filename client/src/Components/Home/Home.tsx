import React from "react";
import styled from "styled-components";
import PeopleImage from '../../images/people-in-line.png';

const HeroTitle = styled.h1`
  font-size: 5em;
  text-align: center;
  color: #ffffff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const HeroTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  padding: 12em 10em;
`;

const HeroButton = styled.a`
  background-color: palevioletred;
  font-size: 2em;
  margin: 2em;
  padding: 0.75em 1em;
  border: 2px solid palevioletred;
  border-radius: 8px;
  width: 16em;
  text-align: center;
  color: #ffffff;

  &:hover {
    text-decoration: none;
    background-color: white;
    color: palevioletred;
  }
`;

const HeaderImage = styled.div`
width: 100%;
height: 400px;
background-image: url(${PeopleImage});
background-size: 100% 100%;
`;


const Home = () => {
  return (
    <HeroTitleWrapper>
      <HeroTitle>Welcome to (Imaginary) Friends Network!</HeroTitle>
      <HeroButton as="a" href="/add">
        Make me Some Friends!
      </HeroButton>
      <HeaderImage />
    </HeroTitleWrapper>
  );
};

export default Home;
