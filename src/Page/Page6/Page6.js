import React from 'react'
import styled from 'styled-components'
import theme from "styled-theming";
import bg from './News.png'
import nbg from './nbg.png'
import { H } from '../Page2/Page2'
import { CardData } from '../config/config'
import TeamCard from '../../components/card/TeamCard'
import { motion } from 'framer-motion';
import { Button } from '../../components/Navbar/Navbar';

export const bColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  



const Sec = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    background-color: rgba(249, 232, 202, 1); 
    padding: 5rem 0.5rem ;
    @media only screen and (max-width: 768px) {
        min-height: 60rem;
        width: 100%;
        padding: 5rem 0.5rem ;
    }

`

const GridAuto = styled.div`
    display: grid;
    width: 1300px;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));


@media only screen and (max-width: 1300px) {
  width: 90%;
}
@media only screen and (max-width: 768px) {
  width: 95%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
}
@media only screen and (max-width: 330px) {
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
 
}
`


const Width = styled.div`
      width: 1100px;
      display: flex;
        background-color: #F6F6EE;
        align-items: center;
        justify-content: space-between;
        padding: 4rem;
        margin: -18rem 0 0 0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

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
        width: 55%;
     // background: red;

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
const Flex = styled.div`
      display: flex;
     // align-items: center;
      justify-content: space-between;
      width: 25rem;
      padding: 1.5rem;
      margin: 0 0 0.5rem 0;
      border: 1px solid rgba(0,0,0,0.2);
`
const T = styled.p`
color: #000;
font-weight: 500;
font-size: 1rem;
// margin-bottom: 2rem;
text-align: left !important;
 // font-weight: bold;
  letter-spacing: 0.05rem;
  line-height: 1.5;
@media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
   
  }
`;

const Page6 = () => {
    return (
       
            
      <Width>
            <Left>
              <HeadingContainer>
                    <Heading>
                     KYC/AML SERVICES
                    </Heading>
                  
                    <Hs>
                    Create a force field around your investors with our KYC/AML Services
                    </Hs>

                    <T>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus sed volutpat proin urna porta magna.
                    </T>
              </HeadingContainer>

              <Button  style={{width:'16rem',margin:'2rem 0 0 0'}}>
                Send a Message 
                <div style={{margin:'0.2rem 0 0 1rem'}}>
                    <svg  width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.13924 14L0 12.9781L6.72152 6.99999L0 1.0219L1.13924 0L9 6.99999L1.13924 14Z" fill="black"/>
                    </svg>
                  </div>
              </Button>
                
              </Left>
            
              <Right>
                <div>
                  <Flex>
                    <div style={{display:'flex'}}>
                    <T>01</T>
                    <T style={{margin:'0 0 0 2rem'}}>Beneficial asset owners</T>
                    </div>
                    <img src='' alt='' style={{width:'3rem'}} />
                  </Flex>
                  <Flex>
                    <div style={{display:'flex'}}>
                    <T>02</T>
                    <T style={{margin:'0 0 0 2rem'}}>Video call records</T>
                    </div>
                    <img src='' alt='' style={{width:'3rem'}} />
                  </Flex>
                  <Flex>
                  <div style={{display:'flex'}}>
                    <T>03</T>
                    <T style={{margin:'0 0 0 2rem'}}>Economic contexts</T>
                    </div>
                    <img src='' alt='' style={{width:'3rem'}} />
                  </Flex>
                  <Flex>
                  <div style={{display:'flex'}}>
                    <T>04</T>
                    <T style={{margin:'0 0 0 2rem'}}>Fund origins</T>
                    </div>
                    <img src='' alt='' style={{width:'3rem'}} />
                  </Flex>
                  <Flex>
                  <div style={{display:'flex'}}>
                    <T>05</T>
                    <T style={{margin:'0 0 0 2rem'}}>Cryptanalysis</T>
                    </div>
                    <img src='' alt='' style={{width:'3rem'}} />
                  </Flex>
                </div>
              </Right>
      </Width>

      
    )
}

export default Page6
