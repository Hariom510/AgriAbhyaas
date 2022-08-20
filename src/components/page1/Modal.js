import React from 'react'
import styled from 'styled-components'


function Modal({open}) {
  if(!open){
    return(
          <Card>
            <h3 className='h31'>Answer is incorrect!</h3>
            <h6>Explanation</h6>
            <p> <h6>Answer:</h6>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
          </Card>
      )
  } 
  return (
    <Card>
            <h3 className='h32'>Answer is correct!</h3>
            <h6>Explanation</h6>
            <p> <h6>Answer:</h6>  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. </p>
          </Card>
  )
}

export default Modal

const Card = styled.div`
    text-align: left;
    padding-left: 40px;
    padding-right: 5px;
    p{
      font-size: 15px;
    }
      .h31{
        color: red;
      }
      .h32{
        color: green;
      }
`;