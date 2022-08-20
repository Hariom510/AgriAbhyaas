import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Circles from './Circles'
import Triangles from './Triangles'
import Quadrilaterals from './Quadrilaterals'
import Parabolas from './Parabolas'
import Polynomials from './Polynomials'
import LinearInequalities from './LinearInequalities'
import TrgonometricFormulas from './TrgonometricFormulas'
import GraphingTrigonometric from './GraphingTrigonometric'
import RationalNumber from './RationalNumber'

// import { Link } from 'react-router-dom';


function Question() {
  // const [textcolor, setcolor] = useState("black");
  // const togglecolor = ()=>{
  //   if(textcolor==="black")
  //   setcolor("green");
    
  // };
  const [topic, setTopic] = useState("Circles");

  const f1 = ()=>{
    setTopic("Circles");
  }
  const f2 = ()=>{
    setTopic("Triangles");
  }
  const f3 = ()=>{
    setTopic("Quadrilaterals");
  }
  const f4 = ()=>{
    setTopic("Parabolas");
  }
  const f5 = ()=>{
    setTopic("Polynomials");
  }
  const f6 = ()=>{
    setTopic("LinearInequalities");
  }
  const f7 = ()=>{
    setTopic("TrigonometicFormula");
  }
  const f8 = ()=>{
    setTopic("TrigonometicFunctions");
  }
  const f9 = ()=>{
    setTopic("RationalNumbers");
  }
  const previous = ()=>{
    if(topic==="Circles") setTopic("Parabolas");
    if(topic==="Triangles") setTopic("Circles");
    if(topic==="Quadrilaterals") setTopic("Triangles");
    if(topic==="Parabolas") setTopic("Quadrilaterals");
    if(topic==="Polynomials") setTopic("LinearInequalities");
    if(topic==="LinearInequalities") setTopic("Polynomials");
    if(topic==="TrigonometicFormula") setTopic("TrigonometicFunctions");
    if(topic==="TrigonometicFunctions") setTopic("TrigonometicFormula");
  }
  const next = ()=>{
    if(topic==="Circles") setTopic("Triangles");
    if(topic==="Triangles") setTopic("Quadrilaterals");
    if(topic==="Quadrilaterals") setTopic("Parabolas");
    if(topic==="Parabolas") setTopic("Circles");
    if(topic==="Polynomials") setTopic("LinearInequalities");
    if(topic==="LinearInequalities") setTopic("Polynomials");
    if(topic==="TrigonometicFormula") setTopic("TrigonometicFunctions");
    if(topic==="TrigonometicFunctions") setTopic("TrigonometicFormula");
  }
  return (
    <Ques>
     <HR></HR>
     <Para>
      <p>Explore various topics for quiz to know where you stand. WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus diam. Sed nisi. Nbcnt per conubia nostra.</p>
     </Para>
     <BoxParent>
     <BoxChild1>
      <DropDown>
      <div className="dropdown">
  <button className="btn butn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Geometry
  </button>
  <ul className="dropdown-menu">
    <li onClick={f1} ><a className="dropdown-item" href="#questPage">Circles</a></li>
    <li onClick={f2} ><a className="dropdown-item" href="#questPage">Triangles</a></li>
    <li onClick={f3}><a className="dropdown-item" href="#questPage">Quadrilaterals</a></li>
    <li onClick={f4}><a className="dropdown-item" href="#questPage">Parabolas</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className="btn butn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Algebra
  </button>
  <ul className="dropdown-menu">
    <li onClick={f5}><a className="dropdown-item" href="#questPage">Polynomials</a></li>
    <li onClick={f6}><a className="dropdown-item" href="#questPage">Linear Inequalities</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className="btn butn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Trigonometry
  </button>
  <ul className="dropdown-menu">
    <li onClick={f7}><a className="dropdown-item" href="#questPage">Trigonometry Formulas</a></li>
    <li onClick={f8}><a className="dropdown-item" href="#questPage">Graphing Trigonometric Functions</a></li>
  </ul>
</div>
<div className="dropdown">
  <button onClick={f9} className="btn butn" type="button"  aria-expanded="false">
    Rational Numbers
  </button>
</div>
      </DropDown>
      </BoxChild1>
      <BoxChild2 id='questPage'>
        {topic==="Circles" && <Circles />}
        {topic==="Triangles" && <Triangles/>}
        {topic==="Quadrilaterals" && <Quadrilaterals/>}
        {topic==="Parabolas" && <Parabolas/>}
        {topic==="Polynomials" && <Polynomials/>}
        {topic==="LinearInequalities" && <LinearInequalities/>}
        {topic==="TrigonometicFormula" && <TrgonometricFormulas/>}
        {topic==="TrigonometicFunctions" && <GraphingTrigonometric/>}
        {topic==="RationalNumbers" && <RationalNumber/>}
      </BoxChild2>
      </BoxParent>
      <Bottombutton>
        <Btn>
      <a onClick={previous} href="#questPage" class="round">&#8249; Previous Topic</a>
      <a onClick={next} href="#questPage" class="round">Next Topic &#8250; </a>
      </Btn>
      </Bottombutton>
    </Ques>
  )
}

export default Question

const Ques = styled.div`
  margin-top: 40px;
  text-align: center;
  min-width: 98%;
  min-height: 500px;
`;
const HR = styled.div`
    
`;
const Para = styled.div`
    text-align: left;
    width: 87%;
    margin: 0 auto;
    @media(max-width: 1260px){      
      width: 81%;
      
  }
`;
const DropDown = styled.div`
   width: 200px;
   margin-left: 20px;
   margin-top: 10px;
   
   
   button{
    @media(max-width: 1260px){       
      width: 80%;
      border: 1px solid black;
      
      
  }
   }
   @media(max-width: 1260px){       
      margin-left: 0px;
      margin-right: 1px;
      margin-bottom: 25px;
      display: inline;
      
  }
`;
const BoxParent = styled.div`
    display: flex;
  width: 95%;
  margin-top: 40px;
  @media(max-width: 1100px){     
        display: inline;
        width: 98%;
        
    }  
`;
const BoxChild1 = styled.div`
   flex: 1; 
   margin-left: 28px;
   @media(max-width: 1100px){     
        
    }  
`;
const BoxChild2 = styled.div`
    flex: 8;
    @media(max-width: 1100px){     
       
       width: 93%;
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
    @media(max-width: 1100px){       
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
