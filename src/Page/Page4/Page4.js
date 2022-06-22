import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from 'styled-theming';
import { FactionData } from '../config/config'
import FactionCard from '../../components/card/FactionCard'
import bg from './flower.png'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });

const Width = styled.div`
      width: 1300px;
 
   display: flex;
   flex-direction: column;

    //align-items: center;
    //justify-content: center;
     
    @media only screen and (max-width: 1300px) {
        width: 98%;
    }
  
`;

const StyleCard = styled.div`
      width: 1300px;
      display: grid;
    
      grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
 
 
      @media only screen and (max-width: 1600px) {
        width: 98%;
     
      }


      @media only screen and (max-width: 510px) {
    
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }
`

const Background = styled.div`
    background-color: rgba(0, 29, 35, 1);
    width: 100%;
    display: flex;
    justify-content: space-around;
    //align-items: center;
    
      padding: 3rem 2rem;
      position: relative;
`;

const Dashboard = styled.div`
    background-color: rgba(2, 169, 92, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1300px;
    padding: 2rem 0;
    border-radius: 1.2rem;
 
    margin: 3rem 0 -6rem 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    @media only screen and (max-width: 1350px) {
      width: 98%;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    }

    @media only screen and (max-width: 1093px) {
      margin: 3rem 0 -12rem 0;
    }
`;



export const T = styled.p`
    color: #FFF;
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

const Flex = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 20rem;
      margin: 0 0 0.5rem 0;
`

const Page4 = (props) => {

  const Sec = styled.section`
   // min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    // background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    padding: ${props.big ? '6rem 0 10rem 0' : '2rem 0'};

    @media only screen and (max-width: 998px) {
        min-height: 100vh;
        width: 100%;
        padding: 2rem 0;
        flex-direction: column;
        background-size: auto 100%;
      }
`;

    return (
        <Sec id="fund">
          <Width>
            <Background>
              <img src={bg} alt='' style={{height:'8rem',width:'6rem'}} />
              <T style={{fontSize:'1.5rem',width:'10rem'}} >Power your Portfolio!</T>
              <T style={{width:'20rem'}}>
              Access special management features like shareholder votes, dividends, and coupon payments for all your security tokens:
              </T>
              <div>
                <Flex>
                  <T>01</T>
                  <T>Shares</T>
                </Flex>
                <Flex>
                  <T>02</T>
                  <T>Adaptive Tokens</T>
                </Flex>
                <Flex>
                  <T>03</T>
                  <T>Digital Mutual Fund</T>
                </Flex>
                <Flex>
                  <T>04</T>
                  <T>Tokenized Bonds</T>
                </Flex>
              </div>
            </Background>
          </Width>
        </Sec>
    )
}

export default Page4
