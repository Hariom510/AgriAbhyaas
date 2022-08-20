import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";

function BottomCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true
      };

  return (
    <>
    <Heading>
            <h1>Checkout other packages</h1>
            </Heading>
    <Caro>
        <InsideCaro>
    <Slider {...settings}>
            <Card>
                <CardChild1>
                <IMG src='images/books.png'>
                </IMG>
                <h5>1.2k enrolled</h5>
                <Star>
                <p>4.5 &#9733;&#9733;&#9733;&#9733; &#9734; (12,567)</p>
                </Star>
               </CardChild1>
               <CardChild2>
                <h4>Gate XE Thermodynamics</h4> <br />
                <InsideCardChild2>
                <i class="fa fa-check-circle fa-" > General Aptitude</i> <br />
                <i class="fa fa-check-circle fa-" > Fluid Mechanics</i><br />
                <i class="fa fa-check-circle fa-" > Food Technology</i><br />
                <i class="fa fa-check-circle fa-" > Engineering Mathematics</i> <br />
                </InsideCardChild2>
                <button className='btn1'> View Package</button>
               </CardChild2> 
            </Card>
            <Card>
                <CardChild1>
                <IMG src='images/books.png'>
                </IMG>
                <h5>1.8k enrolled</h5>
                <Star>
                <p>4.1 &#9733;&#9733;&#9733;&#9733; &#9734; (18,590)</p>
                </Star>
               </CardChild1>
               <CardChild2>
                <h4>Gate XE Mathematics</h4> <br />
                <InsideCardChild2>
                <i class="fa fa-check-circle fa-" > General Aptitude</i> <br />
                <i class="fa fa-check-circle fa-" > Fluid Mechanics</i><br />
                <i class="fa fa-check-circle fa-" > Food Technology</i><br />
                <i class="fa fa-check-circle fa-" > Engineering Mathematics</i> <br />
                </InsideCardChild2>
                <button className='btn1'> View Package</button>
               </CardChild2> 
            </Card>
            <Card>
                <CardChild1>
                <IMG src='images/books.png'>
                </IMG>
                <h5>3.2k enrolled</h5>
                <Star>
                <p>4.4 &#9733;&#9733;&#9733;&#9733; &#9734; (23,567)</p>
                </Star>
               </CardChild1>
               <CardChild2>
                <h4>Gate XE Chemistry</h4> <br />
                <InsideCardChild2>
                <i class="fa fa-check-circle fa-" > General Aptitude</i> <br />
                <i class="fa fa-check-circle fa-" > Fluid Mechanics</i><br />
                <i class="fa fa-check-circle fa-" > Food Technology</i><br />
                <i class="fa fa-check-circle fa-" > Engineering Mathematics</i> <br />
                </InsideCardChild2>
                <button className='btn1'> View Package</button>
               </CardChild2> 
            </Card>
            <Card>
                <CardChild1>
                <IMG src='images/books.png'>
                </IMG>
                <h5>2.2k enrolled</h5>
                <Star>
                <p>4.2 &#9733;&#9733;&#9733;&#9733; &#9734; (10,567)</p>
                </Star>
               </CardChild1>
               <CardChild2>
                <h4>Gate XE Electronics</h4> <br />
                <InsideCardChild2>
                <i class="fa fa-check-circle fa-" > General Aptitude</i> <br />
                <i class="fa fa-check-circle fa-" > Fluid Mechanics</i><br />
                <i class="fa fa-check-circle fa-" > Food Technology</i><br />
                <i class="fa fa-check-circle fa-" > Engineering Mathematics</i> <br />
                </InsideCardChild2>
                <button className='btn1'> View Package</button>
               </CardChild2> 
            </Card>
            <Card>
                <CardChild1>
                <IMG src='images/books.png'>
                </IMG>
                <h5>1.9k enrolled</h5>
                <Star>
                <p>4.9 &#9733;&#9733;&#9733;&#9733; &#9734; (8,997)</p>
                </Star>
               </CardChild1>
               <CardChild2>
                <h4>Gate XE Biology</h4> <br />
                <InsideCardChild2>
                <i class="fa fa-check-circle fa-" > General Aptitude</i> <br />
                <i class="fa fa-check-circle fa-" > Fluid Mechanics</i><br />
                <i class="fa fa-check-circle fa-" > Food Technology</i><br />
                <i class="fa fa-check-circle fa-" > Engineering Mathematics</i> <br />
                </InsideCardChild2>
                <button className='btn1'> View Package</button>
               </CardChild2> 
            </Card>
            <Card>
                <CardChild1>
                <IMG src='images/books.png'>
                </IMG>
                <h5>1.4k enrolled</h5>
                <Star>
                <p>4.0 &#9733;&#9733;&#9733;&#9733; &#9734; (10,567)</p>
                </Star>
               </CardChild1>
               <CardChild2>
                <h4>Gate XE Physics</h4> <br />
                <InsideCardChild2>
                <i class="fa fa-check-circle fa-" > General Aptitude</i> <br />
                <i class="fa fa-check-circle fa-" > Fluid Mechanics</i><br />
                <i class="fa fa-check-circle fa-" > Food Technology</i><br />
                <i class="fa fa-check-circle fa-" > Engineering Mathematics</i> <br />
                </InsideCardChild2>
                <button className='btn1'> View Package</button>
               </CardChild2> 
            </Card>
          </Slider>
          </InsideCaro>
          </Caro>
          </>
  )
}

export default BottomCarousel

const Heading = styled.div`
   margin-top: 20px;
    margin-left: 8%;
    color: green;
    text-align: left;
`;
const Caro = styled.div`
    max-width: 68%;
    padding: 50px;
    margin-top: 50px;
    margin-left: 10%;
    background-color: #CA4E79;
    margin-bottom: 100px;
    border-radius: 10px;
   
    @media(max-width: 1250px){     
        max-width: 82%;
        margin-left: 3%;
  }
  @media(max-width: 1050px){    
        max-width: 94%;
        
  }

`;
const InsideCaro = styled.div`
    
     position: relative;
    text-align: center;
    width: 100%;
`;
const IMG = styled.img`
  width: 400px;
  height: 200px;
  margin-bottom: 5px;
  @media(max-width: 1050px){     
        width: 100%;
  }
`;
const Card = styled.div`

    
`;
const CardChild1 = styled.div`
    text-align: left;
    float: left;
    h5{
        margin-top: 15px;
        margin-left: 10px; 
    }
    @media(max-width: 1050px){     
        float: none;
        
    } 
`;
const Star = styled.div`
    display: inline-block;
    margin-left: 10px; 
    font-size: 22px;
`;
const CardChild2 = styled.div`
    text-align: left;
    margin-left: 60px;
    margin-bottom: 19px; 
    bottom: 360px;
    float: left;
    
    
    @media(max-width: 1050px){    
        float: none;
        margin-left: 10px;
       
    } 
    i{
        font-size: 19px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    
`;
const InsideCardChild2 = styled.div`
    
     @media(max-width: 1050px){     
        display: none;
        
  }
`;