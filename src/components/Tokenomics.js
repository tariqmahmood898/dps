import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Tokenomics.css'; // Custom CSS file
import { FaChartPie, FaRoad, FaUsers, FaWallet, FaRocket } from 'react-icons/fa';

const Tokenomics = () => {
  const data = {
    labels: [
      'Presale (20%)',
      'Liquidity & CEX/DEX (15%)',
      'Team & Founders (15%)',
      'Staking Rewards (20%)',
      'Marketing & Airdrops (10%)',
      'Ecosystem Development (10%)',
      'Reserve Treasury (10%)',
    ],
    datasets: [{
      data: [20, 15, 15, 20, 10, 10, 10],
      backgroundColor: [
        '#36A2EB',
        '#FF6384',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#C9CBCF',
      ],
      hoverOffset: 10,
    }]
  };

  return (

    <div className="tokenomics-container">
  <h1 className="section-title"><FaChartPie /> DPS Token Allocation</h1>

  <div className="allocation-details">
    <div className="allocation-card">
      <h4>Presale – 20%</h4>
      <p>10% unlocked at TGE, remaining distributed monthly over 6 months</p>
    </div>

    <div className="allocation-card">
      <h4>Liquidity & CEX/DEX – 15%</h4>
      <p>Fully unlocked for exchange listings and liquidity provisioning</p>
    </div>

    <div className="allocation-card">
      <h4>Team & Founders – 15%</h4>
      <p>6-month cliff followed by 24-month linear vesting schedule</p>
    </div>

    <div className="allocation-card">
      <h4>Staking Rewards – 20%</h4>
      <p>Gradually distributed to stakers over a period of 5 years</p>
    </div>

    <div className="allocation-card">
      <h4>Marketing & Airdrops – 10%</h4>
      <p>10% unlocked at TGE, remaining released over 12 months</p>
    </div>

    <div className="allocation-card">
      <h4>Ecosystem Development – 10%</h4>
      <p>Reserved for strategic growth, partnerships, and product expansion</p>
    </div>
  </div>

  <div className="chart-section">
    <Pie data={data} />
  </div>

  <h2 className="section-title roadmap-title"><FaRoad /> DPS Roadmap</h2>

  <div className="roadmap-container">
    <div className="roadmap-item">
      <span className="quarter">Q2 2025</span>
      <p><FaRocket /> Token Generation Event (TGE) goes live</p>
    </div>
    <div className="roadmap-item">
      <span className="quarter">Q2 2025</span>
      <p><FaWallet /> DPS listed on DEX/CEX platforms</p>
    </div>
    <div className="roadmap-item">
      <span className="quarter">Q3 2025</span>
      <p><FaUsers /> Launch of the staking rewards platform</p>
    </div>
    <div className="roadmap-item">
      <span className="quarter">Q4 2025</span>
      <p><FaUsers /> Introduction of DAO governance features</p>
    </div>
    <div className="roadmap-item">
      <span className="quarter">Q1 2026</span>
      <p><FaRocket /> Rollout of core ecosystem utilities</p>
    </div>
    <div className="roadmap-item">
      <span className="quarter">Q2 2026</span>
      <p><FaWallet /> Treasury unlock and transition to community DAO</p>
    </div>
  </div>
</div>



  );
};

export default Tokenomics;
