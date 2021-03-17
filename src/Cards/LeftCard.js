import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function LeftCard(props) {
  return (
    <React.Fragment>
       
          <CardContainer>
          <Card>
              <h5>{props.cardHeading}</h5>
              <p>{props.cardContent}</p></Card>
          </CardContainer>
        
        <Diamond></Diamond>
        <Icon>
            
        <StyledIcon style={{color:props.iconColor, backgroundColor:props.iconBackground}} 
       
  icon={['fas', 'check-circle']}
  mask={['fas', 'circle']}
  transform="shrink-8"

/>
        </Icon>
        <Date>{props.date}</Date>
    </React.Fragment>
  );
}

const StyledIcon = styled(FontAwesomeIcon) `
border-radius:50%;
font-size:40px;


`

const CardContainer = styled.div `
box-shadow: 2px 2px 30px 0 rgb(156 156 192 / 26%);
width:410px;
`
const Card = styled.div`
  background-color: white;
  border-radius: 6px;
 
  padding: 20px 40px;
  
  z-index:2;
  h5{
    font-family: "Rubik", Helvetica, Arial, sans-serif;
    font-weight:500;
    line-height:30px;
    letter-spacing:-0.7px;
    margin-bottom:2px;
      padding-top:8px;
      font-size:21px;
      margin-top:0px;
  }
  p{
    font-family: "Roboto" sans-serif,
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    color: var(--mainAsh);
    margin-top:0px;
  }
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
z-index:3;
margin-right:40px;
`
const Date = styled.div `
color: #a0a0a2;
width:410px;
text-align:left;
font-size:18px;
`
