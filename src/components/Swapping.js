import React, { useState } from 'react';
import '../assets/styles/Swapping.css'; // Make sure this path is correct
import { BuyButton, PoolButton, } from './Button';

const Swaping = () => {
  const [usdtAmount, setUsdtAmount] = useState(1);
  const dpsPrice = 0.0025;
  const dpsAmount = (usdtAmount / dpsPrice).toFixed(2);

  return (
    
    <div className="swaping-page">
      {/* LEFT SECTION: Info */}
      <div className="swaping-info">
        

        <h1><span className="highlight">DPS Token</span> Swap Portal</h1>
        <p>
          Participate in the DPS presale and secure your tokens before the price increase. 
          Swap with USDT, TON, or card easily and instantly on the TON blockchain.
        </p>

        <div className="info-sw">
          <h3>📈 Price Info for presale round</h3>
          <p>Current DPS Price: <strong>$0.0025 </strong></p>
          <p>Next Round Price: <strong>$0.010</strong></p>
        </div>

        <div className="info-sw">
          <h3>🔒 Smart Contract</h3>
          <p>Audited, decentralized, and deployed on TON Blockchain. Your funds remain safe and secure.</p>
        </div>

        <div className="info-sw">
          <h3>🎯 Why DPS?</h3>
          <p>Cross Border payment and Low gas fees, high scalability, community governance, and real utility.</p>
        </div>
      </div>
      

      {/* RIGHT SECTION: Swap Portal */}
      <div className="swap-card">

        <h2><span className="highlight">DPS</span> Presale <span className="stage">First Round</span></h2>
        <p>1 DPS = $0.0025 | Next Price = $0.010</p>

        <div className="progress-bar">
          <div className="filled" style={{ width: '10%' }}></div>
        </div>
        <p className="status">Tokens sold: 5,000 / 5,005,000</p>

        <div className="payment-options">
          <button className="option">TON</button>
          <button className="option selected">USDT</button>
          <button className="option">CARD</button>
        </div>

        <div className="input-group">
          <label>Your USDT Amount</label>
          <input
            type="number"
            value={usdtAmount}
            onChange={(e) => setUsdtAmount(e.target.value)}/>

             
        </div>

        <div className="input-group">
         <label>DPS Tokens You Will Receive</label>
          <input type="text" value={dpsAmount} readOnly />
        </div>

        <button className="connect-wallet">Connect Wallet</button>

        <div className="info-buttons">
          <button> How To Buy?</button>
          <BuyButton></BuyButton> <PoolButton></PoolButton>
         
        </div>    
      </div>
      


      
    </div>
  );
};

export default Swaping;
