import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import RationalNumber from '../page1/RationalNumber';

function RationalNumberButtons() {
  const [topic, setTopic] = useState("Rational Numbers");
  return (
    <>
    <Card>
        <h2>Topic:- </h2> <button onClick={()=>{setTopic("Rational Numbers")}}>Rational Numbers</button>
    </Card>
    {topic==="Rational Numbers" && <RationalNumber/>}
    <Bottombutton>
        <Btn>
      <a class="round">&#8249; Previous Topic</a>
      <a class="round">Next Topic &#8250; </a>
      </Btn>
      </Bottombutton>
    </>
  )
}

export default RationalNumberButtons

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
