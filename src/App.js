import './App.css';
import RoadMap from './Roadmap';
import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
      <Container>
      <RoadMap/>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div `
width:100%;
margin:auto;
padding-top:50px;
padding-bottom:50px;
@media(min-width:1200px){
  width:1200px;
  margin:auto;  
}
`