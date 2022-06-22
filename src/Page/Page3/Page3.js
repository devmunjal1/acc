import React from 'react'
import {data} from '../config/config'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import theme from "styled-theming";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import bg from './blue.png'
import center from './1.png'
import { Button } from '../../components/Navbar/Navbar';
import { T,H } from '../Page2/Page2';
import mainBg from './map.jpg'
import { motion } from 'framer-motion';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Width = styled.div`
      width: 1300px;
 
   display: flex;
   flex-direction: column;

    align-items: center;
    justify-content: center;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {

    }
`;

const Div = styled.div`
      width: 100%;
 
   display: flex;
 
    margin: 6rem 0 0 0;
    align-items: center;
    justify-content: space-between;
     
    @media only screen and (max-width: 1100px) {

    }
`;


const HeadingContainer = styled.div`
 
`

const Heading = styled.div`
    
    font-size: 0.75rem;
   color: rgba(0,0,0,0.2);
    letter-spacing: 0.1rem;
    text-align: center;
   
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
       
      }
`;

const Hs = styled(H)`
   text-align: center !important;
   max-width: 998px;
    font-size: 2rem;
    margin: 1.2rem 0;
color: #000000;

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;


const Page3 = (props) => {

    const Sec = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
       // background-image: url(${mainBg});
        background-size: 100% 50rem;
        background-repeat: no-repeat;
        background-color: #FFF ;
        width: 100%;
        padding: 10rem 0 25rem 0;
    @media only screen and (max-width: 1200px) {
        background-size: 150% 50rem;
        background-position: center center;
    }
    @media only screen and (max-width: 768px) {
        min-height: auto;
        width: 100%;
        padding: 2rem 0;
        background-size: 200% 50rem;
    }
`;

const Left = styled(motion.div)`
        width: 55%;
     // background: red;
    margin: -8rem 0 0 0;
          @media only screen and (max-width: 1100px) {
            width: 50%;
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
        }

    @media only screen and (max-width: 768px) {
     
        width: 85%;
      
       
      }
`;

const Right = styled(motion.div)`
        display: flex;
        //justify-content: center;
        flex-direction: column;
        width: 40%;
       // height: 45rem;


          @media only screen and (max-width: 1100px) {
            width: 50%;
            margin: 3rem  0 0 0;
            height: auto;
        }
        @media only screen and (max-width: 998px) {
            width: 65%;
           
        }

      @media only screen and (max-width: 768px) {
        width: 25rem; 
        
      }

      @media only screen and (max-width: 768px) {
        width: 90%; 
        
      }
`;

const IconContainer = styled.div`
     display: flex;
  margin: 2rem 0 0 0;
    align-items: center;
    justify-content: space-between;
  width: 30rem;
  height: 20rem


  @media only screen and (max-width: 800px) {
      width: 99%;
    
  }
  @media only screen and (max-width: 600px) {
      width: 99%;
      
  }
`
const Background = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 90%;
  height: 25rem;
  position: relative;
  display: flex;
  //
  align-items: center;
  justify-content: center;
  margin: 8rem 0 0 0;
`
const Center = styled.div`
    
     width: 20rem;
      height: 35rem;
      position: absolute;
     @media only screen and (max-width: 768px) {
      width: 98%;
      flex-direction: column;
    }
`

    return (
        <Sec id='donate'>

            <Width>
                <HeadingContainer>
                    <Heading>
                    IDENTITY MANAGEMENT
                    </Heading>
                  
                    <Hs style={{textAlign:'center'}}>
                    Take advantage of our Investor Identities for Robust Identity Management and 
                    Advanced Filtering
                    </Hs>
                </HeadingContainer>

                <Div>
                    <Left>
                    
                    <Background>
                        <Center>
                            <img src={center} alt='' style={{width:'100%',height:'100%'}} />
                        </Center>
                    </Background>
                    
                    </Left>
                
                    <Right>
                        <T>
                        Talk to us if you are a financial institution looking to transform your workflows and embrace digital innovation. Our Turnkey Modular Solutions include:
                        </T>
                        <div style={{margin:'2rem 0'}}>
                        <T>-</T>
                        <T>
                        Blockchain optimized ecosystem that will accelerate the growth of your fintech products.
                        </T>
                        </div>
                        <div>
                        <T>-</T>
                        <T>
                        Adaptive Microservice Architecture that will dynamically pivot to improve your intelligence systems.
                        </T>
                        </div>
                        <Button style={{margin:'4rem 0 0 0',width:'16rem'}}>
                            Download App
                            <div style={{margin:'0.2rem 0 0 1rem'}}>
                                <svg  width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.13924 14L0 12.9781L6.72152 6.99999L0 1.0219L1.13924 0L9 6.99999L1.13924 14Z" fill="black"/>
                                </svg>
                            </div>
                        </Button>
                    </Right>
              </Div>
            </Width>
        </Sec>
    )
}

export default Page3
