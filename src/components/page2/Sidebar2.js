import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Verbal from './Verbal';
import Grammer from './Grammer';

function Sidebar() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [topic, setTopic] = useState("Verbal");
    const f1=()=>{
        setTopic("Verbal");
    }
    const f2=()=>{
        setTopic("Grammer");
    }
    return (
        <>
        <Container>
            <RightMenu>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                  <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                <li className='head'>ENGLISH</li>
                <li onClick={f1} >Verbal</li>
                <li onClick={f2}>Grammer</li>  
            </BurgerNav>
            <SubjName>
            <h3>ENGLISH</h3>
            </SubjName>
        </Container>
        <BUTTONS>
            {topic==="Verbal" && <Verbal/>}
            {topic==="Grammer" && <Grammer/>}
        </BUTTONS>
       
        </>
    )
}

export default Sidebar

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px; 
    top:0;
    left:0;
    right: 0;
    z-index: 1;
    background:#357C3C;
    color: white;
`
const RightMenu = styled.div`
        display:flex;
        align-items: center;
        

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

    &:hover{
        color: aliceblue;
    }
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: #357C3C;
    color: black;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(-100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;
        margin: 0 2px;
        border-bottom: 1px solid rgba(0,0,0,.2);
        cursor: pointer;
        font-weight: 600;
        text-decoration: none;
        color: white;
    }
    li:hover{
        color: orange;
    }
    .head{
        font-size: 20px;
        font-weight: bold;
    }
`;
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    &:hover{
        color:aliceblue;
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const BUTTONS = styled.div`
        margin-top: 100px;
        text-align: center;
        button{
            margin-right: 20px;
        }
`;
const SubjName = styled.div`
    text-align: center;
    margin-right: 40px;
`;

