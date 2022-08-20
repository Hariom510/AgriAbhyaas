import React from 'react'
import styled from 'styled-components'

function Welcome() {
  return (
    < Container>
     <TextBody>
        <Heading>
        <h2>Welcome to</h2>
        <h1>AgriAbhyaas</h1>
        </Heading>
        <Paragraph>
            <p>As they say, practice makes you perfect.</p>
            <p>AgriAbhyaas is your one stop platform </p> <p> to practice and excel in challenging</p>
            <p> subjects.</p>
        </Paragraph>
        <Bottom>
            <h4>KNOW YOUR SELF TESTS</h4>
        </Bottom>
     </TextBody>
      <Diary src='images/diary.png' alt="" >
      </Diary>
      <Girl src='images/girl.png' alt="">
      </Girl>

    </Container>
  )
}

export default Welcome

const Container = styled.div`
 background-color : #357C3C;
 min-height: 490px;
 color: white;
 font-family: sans-serif;
 margin:0px;
 position: relative;
`;
const TextBody = styled.div`
position:absolute;
width: 320px;
    margin-top: 150px;
    margin-left: 130px;
    @media(max-width: 1250px){
    margin-left: 50px;
    margin-top: 120px;                
  }
  @media(max-width: 800px){
    margin-left: 30px;            
  }
`;
const Heading = styled.div`
    text-align: left;
    line-height: 8px;
`;
const Paragraph = styled.div`
  margin-top: 35px;
  text-align: left;
  line-height: 8px;
`;
const Bottom = styled.div`
  margin-top: 50px;
  text-align: left;
`;
const Diary = styled.img`
  position:absolute;
  right: 390px;
  margin-top: 160px;
  width: 240px;
  height: 280px;
  box-shadow: 5px 5px lightblue;
  @media(max-width: 1250px){
    width: 180px;
    
    right: 250px;
  }
  @media(max-width: 930px){
    display: none;
  }
`;
const Girl = styled.img`
  position:absolute;
  right: 130px;
  margin-top: 160px;
  width: 240px;
  height: 280px;
  @media(max-width: 1250px){
    width: 170px;
    
    right: 40px;
  }
  @media(max-width: 666px){
    width: 120px;
    height: 120px;
    margin-top: 60px;
    bottom: 280px;

  }
`;