import React from 'react';
import '../assets/styles/Staking.css'; // Import your CSS file for styling
//import Wallet from '../assets/images/wallet.png'; // Import your wallet image
import stak   from '../assets/images/stak.png';
import { PoolButton, BuyButton, VisitButton, DPS } from "./Button"; // Import your button component if needed
// Staking component to display staking information and links 
const Staking = () => {
  return (
    <div className="staking-container">
      <div className="staking-card">
       <img src={ stak } alt="stak" rel='dps'/> 
        <div className="card-content">
          <h1>Stake Your DPS Tokens Securely and Grow Wealth</h1>
          <p> 
            DPS (Decentralized Power System) is a next-generation utility token built on the TON blockchain, 
            designed to empower decentralized ecosystems with secure, fast, and scalable transactions. 
            With real-world use cases like staking, governance, and DeFi integration, 
            DPS offers holders a transparent and rewarding experience. 
            Join the revolution — power your future with DPS.
            <br />
            <PoolButton></PoolButton> <BuyButton></BuyButton> <VisitButton></VisitButton>  <DPS></DPS>
            </p>
        </div>
      </div>

      {/* Row of Two Cards */}
      <div className="staking-row">
        {/* Swapping Card */}
        <div className="staking-box">
          <h3>Swap DPS from Dex </h3>
          <p>Access our official decentralized exchange to trade DPS with high liquidity and low slippage. A fast, secure, and seamless experience awaits.</p>

          <BuyButton></BuyButton>




        </div>
        {/* Liquidity Pool Card */}
        <div className="staking-box">
          <h3>Join the Liquidity Pool</h3>
          <p>Provide liquidity to the DPS/TON pool and earn rewards while supporting a more efficient decentralized trading environment.</p>
          <PoolButton></PoolButton>
        </div>
      </div>

      <div className="staking-benefits-grid">
  <div className="staking-benefit-card">
    <h3>Earn Passive Income</h3>
    <p>
      Stake your DPS tokens and unlock a stable, daily income stream. It's a smart and secure way to grow your assets.
    </p>
  </div>

  <div className="staking-benefit-card">
    <h3>Flexible Locking Periods</h3>
    <p>
      Choose from 30, 60, 90, or 180-day staking durations. You decide how long you commit — we reward accordingly.
    </p>
  </div>

  <div className="staking-benefit-card">
    <h3>Daily Reward Payouts</h3>
    <p>
      Enjoy automated daily DPS rewards directly to your wallet. The longer you stake, the higher the yield.
    </p>
  </div>
      </div>
    </div>
  );
};

export default Staking;
