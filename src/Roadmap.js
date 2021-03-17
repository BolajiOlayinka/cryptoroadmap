import React,{useState} from 'react';
import styled from 'styled-components';
import Left from './Cards/LeftCard';
import Right from './Cards/RightCard';
import Progress from './Progress';

export default function Roadmap(props) {
const [coloredIcon, setColoredIcon] = useState('#eaeaea')

    return (
        <React.Fragment>
            <Progress scroll={100 + '%'}/>
            <Container>
            
                <Wrapper>
                <Left 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
                
            </Container>
            <Container>
            
                <Wrapper>
                <Left 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
                
            </Container>
            <Container>
            
                <Wrapper>
                <Left 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
                
            </Container>
            <Container>
            
                <Wrapper>
                <Left 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
            </Container>
            <Container>
            <Wrapper>
                <Right 
                cardContent="The Centric concept was born out of frustration with the crypto industry and 
                the layers of manipulation which has hindered growth and adoption of the industry."
                cardHeading="Idea conceived"
                date="December, 2017"
                iconColor="#fff" iconBackground={coloredIcon}/>
                </Wrapper>
                
                
                
            </Container>
            
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