import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import GraphingTrigonometric from '../page1/GraphingTrigonometric';
import TrgonometricFormulas from '../page1/TrgonometricFormulas';

function TrigonometryButtons() {
  const [topic, setTopic] = useState("Trigonometric Formulas");
  const previous = ()=>{
    if(topic==="Trigonometric Formulas") setTopic("TrigonometicFunctions");
    if(topic==="TrigonometicFunctions") setTopic("Trigonometric Formulas");
  }
  const next = ()=>{
    if(topic==="Trigonometric Formulas") setTopic("TrigonometicFunctions");
    if(topic==="TrigonometicFunctions") setTopic("Trigonometric Formulas");
  }

  return (
    <>
    <Card>
        <h2>Topic:- </h2> <button onClick={()=>{setTopic("Trigonometric Formulas")}}>Trigonometric Formulas</button>
        <button onClick={()=>{setTopic("TrigonometicFunctions")}}>Graphing Trigonometric</button>
    </Card>
    <div id='questPage'>
    {topic==="Trigonometric Formulas" && <TrgonometricFormulas/>}
    {topic==="TrigonometicFunctions" && <GraphingTrigonometric/>}
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

export default TrigonometryButtons

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
