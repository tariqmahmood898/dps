import React from 'react';
import '../assets/styles/Ston.css'; // Import your CSS file for styling
import Wallet from '../assets/images/wallet.png'; // Import your wallet image
import { walletAddress  } from './config'; // adjust the path if needed

import { PoolButton, BuyButton, VisitButton, DPS } from "./Button"; // Import your button component if needed
// Staking component to display staking information and links 
const ston = () => {
    return(<div className='ston-container'>

        <div className='ston-card'> 
            <img src={Wallet} alt="Staking" rel='dps' />
            <div className='card-content'>
                <h1>Stake Your DPS Tokens Securely and Grow Wealth</h1>
                <p>Maximize your earnings by staking DPS tokens on our platform Ton wallet id is: 
                  
                     {walletAddress} 

                    <br />
                    <PoolButton></PoolButton> <BuyButton></BuyButton> <VisitButton></VisitButton>  <DPS></DPS>
                    
                </p> 
                </div>


        </div>

        <div className='content-area'>

        </div>







    </div>)
  };
  export default ston;