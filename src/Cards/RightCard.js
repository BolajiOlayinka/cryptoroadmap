import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function RightCard(props) {
  return (
    <React.Fragment>
       
         
          <Date>{props.date}</Date>
          <Icon>
            
          <StyledIcon style={{color:props.iconBackground, backgroundColor:props.iconColor}} 
           
      icon={props.firstIcon}
      mask={['fas', 'circle']}
      transform="shrink-8"
    
    />
            </Icon>
            <Diamond></Diamond>
            <CardContainer>
          
          <Card>
              <h5>{props.cardHeading}</h5>
              <p>{props.cardContent}</p></Card>
          </CardContainer>
        
        
        
       
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
    margin-top:0px;
      padding-top:8px;
      font-size:21px;
      
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
  right:-20px;
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
margin-left:40px;
`
const Date = styled.div `
color: #a0a0a2;
width:410px;
text-align:right;
font-size:18px;
`
