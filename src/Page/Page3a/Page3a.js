import React from 'react'
import styled from 'styled-components'
// import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.svg'
import g from './img.jpg'
import theme from "styled-theming";
import left from './donor.png'
import right from './pic.svg'
import { motion } from 'framer-motion'
import { H } from '../Page2/Page2';
import {TiTick} from 'react-icons/ti'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   // min-height: 100vh;
    background-color: #FFF;
    width: 100%;
  
    padding: 5rem 0;
    
    @media only screen and (max-width: 768px) {
        
        padding:  2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Width = styled.div`
      width: 1100px;
      display: flex;
        
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 1400px) {
          width: 998px;
      }
    
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 1000px) {
      width: 98%;   
  }

`

const Left = styled(motion.div)`
        width: 30rem;
        height: 30rem;
        // background-image: url(${left});
        // background-size: 100% 100%;
        // background-repeat: no-repeat;
        border-radius: 1rem;
        
        // @media only screen and (max-width: 1700px) {
        //     height: 35rem;
        //   }

          @media only screen and (max-width: 1100px) {
            width: 30rem;
            height: 30rem;
            
        }
        @media only screen and (max-width: 998px) {
          width: 20rem;
          height: 20rem;
        }

    // @media only screen and (max-width: 768px) {
     
    //     width: 85%;
    //     height: 25rem;
       
    //   }
`;

const Right = styled.div`
        display: flex;
        justify-content: center;
     
        flex-direction: column;
        width: 27rem;
    
        @media only screen and (max-width: 1100px) {
          margin: 3rem 0 0 0;
      }

        @media only screen and (max-width: 998px) {
            width: 65%;
           
        }

      @media only screen and (max-width: 768px) {
        width: 95%; 
       
      }
`;

export const T = styled.p`
    color: rgba(0, 29, 35, 1);
    //font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    text-align: left;
    line-height: 1.6;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;



const Ht = styled.h1`
    color: #e69500;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;


const Founder = styled.div`
    
  background-image: url(${g});
  background-size: 90% 100%;
  background-repeat: no-repeat;
  padding: 2rem 1rem;
  margin: 1rem 0 0 0;

  @media only screen and (max-width: 510px) {
  
    background-size: 100% 100%;
  }

`
const Heading = styled.div`
    
    font-size: 0.75rem;
   color: rgba(0,0,0,0.2);
    letter-spacing: 0.1rem;
   
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
       
      }
`;

const Hs = styled(H)`
   text-align: center;
    font-size: 2rem;
    margin: 1.2rem 0;
color: #000000;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const HeadingContainer = styled.div`
 
`

const Page3a = () => {
  
    return (
        <Sec id="rarity">

            <Width>
                
                <Left 
                 //   whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                   
                />

                <Right>

                  <HeadingContainer>
                    <Heading>
                      ABOUT US
                    </Heading>
                  
                    <Hs>
                    Accredited Digital 
                    Asset Custodian
                    </Hs>
                  </HeadingContainer>
                      
                    <T>
                    Is a multi-boutique solution to digital asset management that allows the user to purchase and transact with crypto, manage their digital asset portfolio, and verify their identity and investor status-all from a secure mobile application.
                    </T>

                    
                   
                </Right>

            </Width>

        </Sec>
    )
}

export default Page3a





