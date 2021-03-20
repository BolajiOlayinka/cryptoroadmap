import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Left from './Cards/LeftCard';
import Right from './Cards/RightCard';
import Progress from './Progress';

export default function Roadmap(props) {
// const [coloredIcon, setColoredIcon] = useState('#eaeaea');
const [colorone, setColorOne] = useState('#eaeaea');
const [colortwo, setColorTwo] = useState('#eaeaea');
const [colorthree, setColorThree] = useState('#eaeaea');
const [colorfour, setColorFour] = useState('#eaeaea');
const [colorfive, setColorFive] = useState('#eaeaea');
const [scrollPosition, setScrollPosition]=useState(0)

const calculateScrollDistance = ()=>{
    const scrollTop = window.pageYOffset;
    // console.log(scrollTop);
    const offSetTop = 20;
    const scrollPosition = Math.floor(scrollTop-offSetTop)
    setScrollPosition(scrollPosition);
    if(scrollPosition>=3440){
        setScrollPosition(3440)
    }else{
        setScrollPosition(scrollPosition)
    }
    
}

const SetActiveIcons = ()=>{
  
    if(scrollPosition>=20){
        setColorOne('black');
    }else{
      setColorOne('#eaeaea');
    }
    if(scrollPosition>=180){
      setColorTwo('black');
  }else{
    setColorTwo('#eaeaea');
  }
  if(scrollPosition>=400){
    setColorThree('black');
}else{
  setColorThree('#eaeaea');
}
if(scrollPosition>=600){
  setColorFour('black');
}else{
setColorFour('#eaeaea');
}
  if(scrollPosition>=800){
      setColorFive('black');
  }else{
    setColorFive('#eaeaea');
  }
//   const SetActiveIconSix = ()=>{
// if(scrollPosition>=400){
//   setColorSix('black');
// }else{
// setColorSix('#eaeaea');
// }}
//   const SetActiveIconSeven = ()=>{
// if(scrollPosition>=580){
//   setColorSeven('black');
// }else{
// setColorSeven('#eaeaea');
// }
// }
  }



  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        calculateScrollDistance();
        
      });
    });
  };
//   const checkProgressLength = ()=>{
//       if(scrollPosition===3450){
//           setScrollPosition(3450)
//       }else{}
//   }
useEffect(()=>{
  listenToScrollEvent();
  
})
useEffect(()=>{
  document.addEventListener("scroll", () => {
  requestAnimationFrame(() => {
    SetActiveIcons();
    // SetActiveIconTwo();
    // SetActiveIconThree();
    // SetActiveIconFour();
  })
}) 
  })
  
  
  


const content = {
    one:{
        heading:`Idea conceived`,
        body:`The Token concept was born out of frustration with the 
        crypto industry and the layers of manipulation which has hindered 
        growth and adoption of the industry.
      `,
      date: `December, 2017`
    },
    two:{
        heading:`Centralized exchange launched`,
        body:`Tokens were traded on a bespoke centralized exchange 
        designed to test and grow the Token model.
      `,
      date: `May, 2018`
    },
    three:{
        heading:`Protocol upgrade`,
        body:`To provide a better user experience and keep 
        up with growing transaction demand the tokens were 
        converted to TRC-20 and launched on the TRON network.
      `,
      date: `December, 2018`
    },
    four:{
        heading:`Moolah.bet partnership`,
        body:`A leading i-gaming platform which allows 
        members to mine tokens while playing 
        a variety of licensed and provably fair games online.
      `,
      date: `July, 2019`
    },
    five:{
        heading:`The Foundation established`,
        body:`The Foundation was established to 
        focus on expansion of the Token network and guide 
        continued growth and success.。
      `,
      date: `October, 2019`
    },
    six:{
        heading:`Managerial token protocol`,
        body:`Token was upgraded to its 
        current dual token ecosystem to self-regulate 
        token supply to meet ongoing changes in demand.
      `,
      date: `February, 2020`
    },
   seven:{
        heading:`Tokens decentralized`,
        body:`All temporary trade restrictions placed on Both Tokens (Mangerial and Governance) were lifted.
      `,
      date: `21st July, 2020`
    },
    eight:{
        heading:`Initial exchange listings`,
        body:`Tokens began trading on its 
        first four trusted exchanges.
      `,
      date: `28th July, 2020`
    },
    nine:{
        heading:`Additional exchange listings`,
        body:`The Foundation is currently 
        working on listing Tokens on all 
        major cryptocurrency exchanges.
      `,
      date: `In progress`
    },
    ten:{
        heading:`Integrations & partnerships`,
        body:`We are beginning to execute our plans for growing the utility of the token. 
        The Foundation hopes to integrate 100+ existing cryptocurrency 
        projects into the token's economy.
      `,
      date: `Coming soon`
    },
    eleven:{
        heading:`Wallet and technical integrations`,
        body:`The Token tech team will release mobile and 
        desktop versions of the Token Wallet as well as 
        developer tools for anybody to integrate with Token
      `,
      date: `Upcoming`
    },
   twelve:{
        heading:`Crypto Donation`,
        body:`A strategic partnership 
        with Crypto Donation, a non-profit organization 
        using cryptocurrency to make the world a better place.
      `,
      date: `Upcoming`
    },
    thirteen:{
        heading:`Token Business`,
        body:`A point of sale and business wallet allowing 
        merchants & service providers to easily accept Tokens.
      `,
      date: `Upcoming`
    },
    fourteen:{
        heading:`Token Blockchain`,
        body:`A native blockchain that achieves the following features:
        1. Decentralization
        2. Security
        3. Immutability
        4. Speed & Scale
      `,
      date: `Upcoming`
    },
    fifteen:{
        heading:`Token Center concept`,
        body:`We’ll reveal our vision for the future of local banking.
      `,
      date: `Upcoming`
    },
    sixteen:{
        heading:`Token Ventures`,
        body:`A program designed to invest in teams with innovative ideas that add value to the Token network.
      `,
      date: `Upcoming`
    },
    seventeen:{
        heading:`Token Foundation governance upgrades`,
        body:`Foundation will establish the highest standards of transparency and governance.
      `,
      date: `Upcoming`
    },
    eighteen:{
        heading:`Regulatory portal`,
        body:`Access for financial regulators to ensure the highest regulatory standards.
      `,
      date: `Upcoming`
    },

  };

    return (
        <React.Fragment>
            <Progress lineColor={'#55cdff'} height={scrollPosition + 'px'}/>
            {console.log(scrollPosition)}
            <Container>
            
                <Wrapper>
                <Left 
                cardContent={content.one.body}
                cardHeading={content.one.heading}
                date={content.one.date}
                iconColor="fff" iconBackground={colorone}
                firstIcon={['fas','check-circle']}/>
                
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.two.body}
                cardHeading={content.two.heading}
                date={content.two.date}
                iconColor="#fff" iconBackground={colortwo}
               
                firstIcon={['fas','check-circle']}/>
                 {console.log(colortwo)}
                </Wrapper>
                
                
                
            </Container>
            <Container>
            
                <Wrapper>
                <Left 
                cardContent={content.three.body}
                cardHeading={content.three.heading}
                date={content.three.date}
                iconColor="#fff" iconBackground={colorthree}
                firstIcon={['fas','check-circle']}/>
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.four.body}
                cardHeading={content.four.heading}
                date={content.four.date}
                iconColor="#fff" iconBackground={colorfour}
                firstIcon={['fas','check-circle']}
                />
                </Wrapper>
                
                
                
            </Container>
            <Container>
            
                <Wrapper>
                <Left 
                cardContent={content.five.body}
                cardHeading={content.five.heading}
                date={content.five.date}
                iconColor="#fff" iconBackground={colorfive}
                firstIcon={['fas','check-circle']}/>
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.six.body}
                cardHeading={content.six.heading}
                date={content.six.date}
                iconColor="#fff" iconBackground={colorfour}
                firstIcon={['fas','check-circle']}/>
                </Wrapper>
                
                
                
            </Container>
            <Container>
            
                <Wrapper>
                <Left 
                cardContent={content.seven.body}
                cardHeading={content.seven.heading}
                date={content.seven.date}
                iconColor="#fff" iconBackground={colorfive}
                firstIcon={['fas','check-circle']}/>
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.eight.body}
                cardHeading={content.eight.heading}
                date={content.eight.date}
                iconColor="#fff" iconBackground={colorone}
                firstIcon={['fas','check-circle']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Left
                cardContent={content.nine.body}
                cardHeading={content.nine.heading}
                date={content.nine.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','sync-alt']}
                />
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.ten.body}
                cardHeading={content.ten.heading}
                date={content.ten.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar-check']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Left
                cardContent={content.eleven.body}
                cardHeading={content.eleven.heading}
                date={content.eleven.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.twelve.body}
                cardHeading={content.twelve.heading}
                date={content.twelve.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Left
                cardContent={content.thirteen.body}
                cardHeading={content.thirteen.heading}
                date={content.thirteen.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.fourteen.body}
                cardHeading={content.fourteen.heading}
                date={content.fourteen.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Left
                cardContent={content.fifteen.body}
                cardHeading={content.fifteen.heading}
                date={content.fifteen.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.sixteen.body}
                cardHeading={content.sixteen.heading}
                date={content.sixteen.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Left
                cardContent={content.seventeen.body}
                cardHeading={content.seventeen.heading}
                date={content.seventeen.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent={content.eighteen.body}
                cardHeading={content.eighteen.heading}
                date={content.eighteen.date}
                iconColor="#fff" iconBackground={colortwo}
                firstIcon={['fas','calendar']}/>
                </Wrapper>
                
            </Container>
            
            <ProgressUnderlay/>
            <TextSection>
            <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>...more paragraphs of text, enough so that the page gets a scrollbar</p>
            </TextSection>
        </React.Fragment>
    )
}

const Container= styled.div `
width:900px;
margin:auto;
margin-top:30px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ProgressUnderlay = styled.div`
  position: absolute;
  
  left: 50%;
  top: 160px;
  background: #eaeaea;
  width: 2px;
  height: 3450px;
  z-index: 1;
`;
const TextSection = styled.div `
position:relative;
margin-top:70px;
`