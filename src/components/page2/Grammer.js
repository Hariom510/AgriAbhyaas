import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Grammer1 from '../page1/Grammer1';
import Grammer2 from '../page1/Grammer2';

function Grammer() {
  const [topic, setTopic] = useState("Grammer1");
  const previous = ()=>{
    if(topic==="Grammer1") setTopic("Grammer2");
    if(topic==="Grammer2") setTopic("Grammer1");
  }
  const next = ()=>{
    if(topic==="Grammer1") setTopic("Grammer2");
    if(topic==="Grammer2") setTopic("Grammer1");
  }

  return (
    <>
    <Card>
        <h2>Topic:- </h2> <button onClick={()=>{setTopic("Grammer1")}}>Grammer1</button>
        <button onClick={()=>{setTopic("Grammer2")}}>Grammer2</button>
    </Card>
    <div id='questPage'>
    {topic==="Grammer1" && <Grammer1/>}
    {topic==="Grammer2" && <Grammer2/>}
    </div>
    <Bottombutton>
        <Btn>
      <a onClick={previous} href="#questPage" class="round">&#8249; Previous Topic</a>
      <a onClick={next} href="#questPage" class="round">Next Topic &#8250; </a>
      </Btn>
      </Bottombutton>
    </>
  )
}

export default Grammer

const Card = styled.div`
    margin-bottom: 30px;
    h2{
        color: #357C3C;
        display: inline-block;
        margin-right: 30px;
    }
    button{
        border-radius: 10px;
        color:#357C3C;
        
        font-weight: bold;
    }
    button:hover{
      background-color: green;
      color: white;
    }
`;
const Bottombutton= styled.div`
    min-height:50px;
    margin-left:27%;
    margin-right: 5%;
    text-align: center;
    
    .round{
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  font-size: 15px;
  font-weight: bold;
  color: black;
  
  
    }
    .round:hover{
      color: green;
    }
    @media(max-width: 1050px){       
     display: inline;
      
    }
 
`;
const Btn = styled.div`
    margin: 0 auto;               
    padding: 10px;
    a{
      margin: 10px;
    }
   
`;
