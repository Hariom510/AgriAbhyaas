import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Circles from '../page1/Circles';
import Triangles from '../page1/Triangles';
import Quadrilaterals from '../page1/Quadrilaterals';
import Parabolas from '../page1/Parabolas';

function GeometryButtons() {
  const [topic, setTopic] = useState("Circles");
  const previous = ()=>{
    if(topic==="Circles") setTopic("Parabolas");
    if(topic==="Triangles") setTopic("Circles");
    if(topic==="Quadrilaterals") setTopic("Triangles");
    if(topic==="Parabolas") setTopic("Quadrilaterals");
    
  }
  const next = ()=>{
    if(topic==="Circles") setTopic("Triangles");
    if(topic==="Triangles") setTopic("Quadrilaterals");
    if(topic==="Quadrilaterals") setTopic("Parabolas");
    if(topic==="Parabolas") setTopic("Circles");
    
  }

  return (
    <>
    <Card>
        <h2>Topic:- </h2> <button onClick={()=>{setTopic("Circles")}}>Circles</button>
        <button onClick={()=>{setTopic("Triangles")}}>Triangles</button>
        <button onClick={()=>{setTopic("Quadrilaterals")}}>Quadrilaterals</button>
        <button onClick={()=>{setTopic("Parabolas")}}>Parabolas</button>  
    </Card>
    <div id='questPage'>
      {topic==="Circles" && <Circles/>}
      {topic==="Triangles" && <Triangles/>}
      {topic==="Quadrilaterals" && <Quadrilaterals/>}
      {topic==="Parabolas" && <Parabolas/>}
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

export default GeometryButtons

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
    margin-left:20%;
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
