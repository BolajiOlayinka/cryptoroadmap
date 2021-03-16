import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function LeftCard(props) {
  return (
    <React.Fragment>
        <Container>
      <Wrapper>
          <CardContainer>
          <Card>The Centric concept was born out of frustration with the crypto industry and the layers of manipulation which has hindered growth and adoption of the industry.</Card>
          </CardContainer>
        
        <Diamond></Diamond>
        <Icon>
        <StyledIcon
        
  icon={['fas', 'check-circle']}
  mask={['fas', 'circle']}
  transform="shrink-8"
  fixedWidth
/>
        </Icon>
      </Wrapper>
      </Container>
    </React.Fragment>
  );
}

const Container= styled.div `
width:900px;
margin:auto;
padding-top:50px;
`
const StyledIcon = styled(FontAwesomeIcon) `
color:#e8e8f6;
font-size:40px;

`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CardContainer = styled.div `
box-shadow: 2px 2px 30px 0 rgb(156 156 192 / 26%);
`
const Card = styled.div`
  background-color: white;
  border-radius: 6px;
 
  padding: 40px;
  width:410px;
  z-index:2;
`;
const Diamond = styled.div`
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-bottom-color: white;
  position: relative;
  top: -20px;
  left:-20px;
  z-index:1;
  ::after {
    content: "";
    position: absolute;
    left: -20px;
    top: 20px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color:white;
  }
`;
const Icon = styled.div `

`
