import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Polynomials from '../page1/Polynomials';
import LinearInequalities from '../page1/LinearInequalities';


function AlgebraButtons() {
  const [topic, setTopic] = useState("Polynomials");
 
  const previous = ()=>{
    if(topic==="Polynomials") setTopic("LinearInequalities");
    if(topic==="LinearInequalities") setTopic("Polynomials");
    
  }
  const next = ()=>{
    if(topic==="Polynomials") setTopic("LinearInequalities");
    if(topic==="LinearInequalities") setTopic("Polynomials");
        
  }
  return (
    <>
    <Card>
        <h2>Topic:- </h2> <button onClick={()=>{setTopic("Polynomials")}}>Polynomials</button>
        <button onClick={()=>{setTopic("LinearInequalities")}}>Linear Inequalities</button>  
    </Card>
    <div id='questPage'>
    {topic==="Polynomials" && <Polynomials/>}
    {topic==="LinearInequalities" && <LinearInequalities/>}
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

export default AlgebraButtons

const Card = styled.div`
    margin-bottom: 30px;
    margin-left: 1px;
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
