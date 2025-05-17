import React from 'react';
import '../assets/styles/Home.css';
import Wallet from '../assets/images/wallet.png';
import { PoolButton, BuyButton } from './Button'; // Import the Button component


function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">
        <img src={ Wallet  } alt="DPS Crypto Token"/>
        <div className="hero-text">
          <h1>Future of Decentralized Finance with DPS</h1>
          <p> <strong>Decentralized Power System (DPS) is a revolutionary crypto token built on the TON blockchain. </strong> 
            Experience Secure, Transparent, and Innovative Crypto Solutions.
            Join a thriving community dedicated to redefining the future of finance.
            Discover next-generation blockchain technology that puts trust speed, and empowerment at your fingertips.
            <br />


            <PoolButton></PoolButton> <BuyButton></BuyButton>

          </p>
        </div>
      </div>
      

      <section className="features">
        <h2> Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
      
            <h3> 🔐 Secure Staking</h3>
            <p>Stake your DPS tokens securely and earn consistent rewards on the TON network.</p>
          </div>

          <div className="feature-item">
            <h3>Seamless Swapping</h3>
            <p>Swap DPS with other tokens instantly and securely using our easy-to-use platform.</p>
          </div>

          <div className="feature-item">
            <h3>Community Driven</h3>
            <p>Governed by its users, DPS thrives through active community ideas and decisions.</p>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="feature-list">
          <div className="feature-item">
            <h3>Low Transaction Fees</h3>
            <p>Experience quick and cost-effective transactions thanks to the power of TON blockchain.</p>
          </div>

          <div className="feature-item">
            <h3>Real-Time Analytics</h3>
            <p>Use detailed real-time metrics to track your staking performance and token balance.</p>
          </div>

          <div className="feature-item">
            <h3>Cross-Chain Support</h3>
            <p>Connect your wallet to multiple blockchains and explore more powerful DeFi options.</p>
          </div>
        </div>
      </section>

      
      <div class="diamond"></div>
      <div class="polygon"></div>
      <div class="diamond2"></div>


    </div>

  );
}

export default Home;
