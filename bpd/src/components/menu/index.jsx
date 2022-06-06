import React from "react";
import styled from "styled-components";
import { PageContainer } from "../pageContainer";



const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    line-height: 1.2em;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      color: #909E85;
    }
  }

`;

export function Menu(props) {
  return (
    <PageContainer> 
      <Background>
        <ul>
          <a href="/gabehug"><li><p>Gabe Hug</p></li></a>
          <a href="/photography"><li><p>Photography</p></li></a>
          <a href="/webDesign"><li><p>Web Design</p></li></a>
          <a href="/prints"><li><p>Prints</p></li></a>
          <a href="/contact"><li><p>Contact</p></li></a>
        </ul>
      </Background>
    </PageContainer>
  )
}