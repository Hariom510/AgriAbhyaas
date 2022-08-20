import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { getQueriesForElement } from '@testing-library/react';
import Modal from './Modal';

function Triangles() {
  
  const [isOpen, setIsOpen] = useState("false");
  const [ans, setAns] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [questNo, setQuesNo] = useState("");

  const answer = ()=> {
    if(isOpen==="true") setAns(true);
    else setAns(false);
  }
  const toggleClick = ()=>{
      if(!clicked){
        setClicked(true);
      } 
  }

return (
    <Box>
        <One>
        <FullQst>
        <Num>1.</Num>
        <Qst>
        <p>Triangles Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </Qst>
        </FullQst>
        <BoxInside>
        <Option>
            <InsideOpt>
                <p ><input  type="radio" name='q1' value="true" onChange={(e)=>setIsOpen(e.target.value)} /> Option A</p>
                <p><input  type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)} /> Option B</p>
                <p><input type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)} /> Option C</p>
                <p><input  type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)} /> Option D</p>
            </InsideOpt>
        </Option>
        {clicked===true && questNo==="1" && <Modal open={ans}/>}
          <Buttons>
            <button onClick= {()=>{answer(); toggleClick(); setQuesNo("1")}} className='btn1 '>Answer and solution </button>
            <button className='btn2 '>Join the discussion</button>
            <button className='btn3 '>Save for later</button>
          </Buttons>
        </BoxInside>
        </One>

        <One>
        <FullQst>
        <Num>2.</Num>
        <Qst>
        <p>Triangles Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </Qst>
        </FullQst>
        <BoxInside>
        <Option>
            <InsideOpt>
                <p><input type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option A</p>
                <p><input type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option B</p>
                <p><input type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option C</p>
                <p><input type="radio" name='q1' value="true" onChange={(e)=>setIsOpen(e.target.value)}/> Option D</p>
            </InsideOpt>
        </Option>
        {clicked===true && questNo==="2" && <Modal open={ans}/>}
          <Buttons>
            <button onClick= {()=>{answer(); toggleClick(); setQuesNo("2")}}  className='btn1'>Answer and solution </button>
            <button className='btn2'>Join the discussion</button>
            <button className='btn3'>Save for later</button>
          </Buttons>
        </BoxInside>
        </One>

        <One>
        <FullQst>
        <Num>3.</Num>
        <Qst>
        <p>Triangles Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </Qst>
        </FullQst>
        <BoxInside>
        <Option>
            <InsideOpt>
                <p><input  type="radio" name='q1' value="true" onChange={(e)=>setIsOpen(e.target.value)}/> Option A</p>
                <p><input  type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option B</p>
                <p><input  type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option C</p>
                <p><input type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option D</p>
            </InsideOpt>
        </Option>
        {clicked===true && questNo==="3" && <Modal open={ans}/>}
          <Buttons>
            <button onClick= {()=>{answer(); toggleClick(); setQuesNo("3")}}  className='btn1'>Answer and solution </button>
            <button className='btn2'>Join the discussion</button>
            <button className='btn3'>Save for later</button>
          </Buttons>
        </BoxInside>
        </One>

        <One>
        <FullQst>
        <Num>4.</Num>
        <Qst>
        <p>Triangles Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </Qst>
        </FullQst>
        <BoxInside>
        <Option>
            <InsideOpt>
                <p><input type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option A</p>
                <p><input  type="radio" name='q1' value="true" onChange={(e)=>setIsOpen(e.target.value)}/> Option B</p>
                <p><input   type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option C</p>
                <p><input type="radio" name='q1' value="false" onChange={(e)=>setIsOpen(e.target.value)}/> Option D</p>
            </InsideOpt>
        </Option>
        {clicked===true && questNo==="4" && <Modal open={ans}/>}
          <Buttons>
            <button onClick= {()=>{answer(); toggleClick(); setQuesNo("4")}} className='btn1'>Answer and solution </button>
            <button className='btn2'>Join the discussion</button>
            <button className='btn3'>Save for later</button>
          </Buttons>
        </BoxInside>
        </One>
    </Box>
 
  )
}

export default Triangles

const Box = styled.div`
    width: 88%;
    min-height: 900px;          
    border: 2px solid green;
    margin-left: 11%;
    overflow: auto;
    max-height: 90vh;
`;
const One = styled.div`
    margin-bottom: 40px;
`;
const FullQst = styled.div`
    display: inline-block;
    margin-top: 10px;
    width: 90%;
`;
const Qst = styled.div` 
   margin-top:20px;
    text-align:left;
    margin-left: 35px;       
`;
const Num = styled.div`
  color: green;
  font-size: 2rem;
  font-weight: bolder;
  float: left;
  margin-top: 8px;
  margin-right: 5px;
`;
const BoxInside = styled.div`
   
    width: 97%; 
    min-height: 250px;
`;
const Option= styled.div`
   text-align: left;
   width: 90%;
   margin-left: 7%;
   
   
`;
const InsideOpt = styled.div`
    margin-left: 40px;
    
`;
const Buttons = styled.div`    
    margin-left: 30px;
    button{ 
      transition: .2s;
      margin-bottom: 10px;
   @media(max-width: 1050px){
    width: 80%;
    font-size: 14px;

  } 
    }
    button:hover{
      opacity: 0.8;
  -ms-transform: scale(1.01);
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
    }

    @media(max-width: 1050px){
    
    font-size: 14px;
    margin-left: 50px;
  }

`;