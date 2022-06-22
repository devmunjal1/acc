import React from 'react'
import styled from 'styled-components'
import bg from './bg.png'
// import { Button, IconContainer } from '../../components/Navbar/Navbar';
import { H,T } from '../Page2/Page2'
import two from './two.png'
import img2 from './2.svg'
import img3 from './3.svg'
import img4 from './4.svg'
import img5 from './5.svg'
import { motion } from 'framer-motion'

const Sec = styled.section`
 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    padding: 8rem 0 5rem 0;
    @media only screen and (max-width: 768px) {
        padding: 2rem 0;
        background-size: auto 100%;
      }
`;

const Width = styled.div`
      width: 1300px;
      display: flex;
     
        //align-items: center;
        justify-content: space-between;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`

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

const Ht = styled.h1`
    color: #000000;
    font-size: 2rem;
  
    text-align: left;
   font-weight: 500;
    line-height: 1.2;


    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.5rem;
        font-weight: bold;
      }
`;


const Page2 = () => {
  
    return (
        <Sec id="garage">

          <Width>
              <Left>
                <Ht>
                The only digital solution for asset management that is 
                safe and cost-effective
                </Ht>
                <IconContainer>
                  <img src={two} alt='' style={{height:'100%',width:'100%'}} />
                </IconContainer>
                
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
              </Right>

          </Width>       

        </Sec>
    )
}

export default Page2
