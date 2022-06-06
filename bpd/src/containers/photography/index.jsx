import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import webBackground from "../../assets/webBackground.mp4";
import { Menu } from "../../components/menu";
import Rectangle from "../../assets/Rectangle.png";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const MenuContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0em 2em;
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 2em;

  image {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  align-items: center;

`;

const InformationContainer = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4em;
`;

const ImageContainer = styled.div`
  width: auto;
  height; 100vh;
  display: flex; 
  flex-direction: row; 

  img {
    width: 50em;
    height: 50em;
    margin 2em;
  }
`;


export function Photography(props) {
  return (
    <PageContainer>
      <Background>
        <MenuContainer>
          <LogoContainer>
            <img src= {Rectangle} alt="logo"/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <InformationContainer>
            <h1>The Fading Landscape</h1>
            <p>This is an artists statement about how this is all about nature 
and humans are fucking up the planet and yay thats all that
I have for you today, that is my statement. I would need to add 
more actual information here about where it was Show and
all of that other shit, what camera I was using, but for now this
looks good. I just need something here! </p>
          </InformationContainer>
          <ImageContainer>
            <img src= {Rectangle} alt="logo"/>
            <img src= {Rectangle} alt="logo"/>
            <img src= {Rectangle} alt="logo"/>
            <img src= {Rectangle} alt="logo"/>
            <img src= {Rectangle} alt="logo"/>
            <img src= {Rectangle} alt="logo"/>
            <img src= {Rectangle} alt="logo"/>
            <img src= {Rectangle} alt="logo"/>
          </ImageContainer>
        </ContentContainer>
      </Background>
    </PageContainer>
  )
}