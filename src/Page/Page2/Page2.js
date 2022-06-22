import React from 'react'
import styled from 'styled-components'
// import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.svg'
import theme from "styled-theming";
import left from './m1.png'
import right from './m2.png'
import { motion } from 'framer-motion'
import element from './element.png'
import { Button } from '../../components/Navbar/Navbar';
import frame from './Frame.png'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height:  45rem;
    background-color: #FFF;
    width: 100%;
  
    padding: 5rem 0;
    
    @media only screen and (max-width: 768px) {
        
      
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Width = styled.div`
      width: 1400px;
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 1400px) {
          width: 95%;
      }
    
    
    @media only screen and (max-width: 1000px) {
      width: 98%;   
  }

`

export const T = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 1rem;
   // margin-bottom: 2rem;
    text-align: left;
     // font-weight: bold;
      letter-spacing: 0.05rem;
      line-height: 1.5;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

export const H = styled.h1`
    color: #000;
    font-size: 1.8rem;
    font-weight: 500;
    margin: 0 2rem 0 0;
    text-align: left !important;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;


const Center = styled.div`
      width: 1000px;
      display: flex;
     // flex-direction: column;
      background-color: #FAF7DC;
      
        border-radius: 1.5rem;
        padding: 3rem 3rem 3rem 15rem;
        background-image: url(${left});
        background-size: 25rem 20rem;
        background-position: left bottom !important;
        background-repeat: no-repeat;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
       
        padding: 3rem;
        background-image: none;
    }

`
const Center1 = styled.div`
      width: 1000px;
      display: flex;
     // flex-direction: column;
      background-color: #FAF7DC;
      
        border-radius: 1.5rem;
        padding: 3rem 3rem 3rem 15rem;
        background-image: url(${right});
        background-size: 25rem 20rem;
        background-position: left bottom !important;
        background-repeat: no-repeat;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
       
        padding: 3rem;
        background-image: none;
    }

`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Container1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 3rem 0 0 0;
`

const Page2 = () => {
  
    return (
        <Sec id="">

          <Width>

        <Container>
            <Center>
              <H>Financial Institution?</H>
              <T>
              If you’re looking for a way to streamline tokenized share selling, secondary trading, investor management, or report distribution, you can have it all in one place - the Cedent Platform. We will set up everything you need to manage tokenized assets daily.
              <div style={{margin:'2rem 0 0 0'}}>
              We will give your team a dashboard to work with and specialized advice that will take care of the nuts and bolts of the tokenization process.
              </div>
              </T>
              
            </Center>
          </Container>

          <Container1>

          <Center1 style={{backgroundColor:'#F6F6EE'}}>
              <H>Business?</H>
              <T>
              If you’re looking for a way to streamline tokenized share selling, secondary trading, investor management, or report distribution, you can have it all in one place - the Cedent Platform. We will set up everything you need to manage tokenized assets daily.
              <div style={{margin:'2rem 0 0 0'}}>
We will give your team a dashboard to work with and specialized advice that will take care of the nuts and bolts of the tokenization process.
              </div>
              </T>
              
            </Center1>
          </Container1>

          </Width>

        </Sec>
    )
}

export default Page2





