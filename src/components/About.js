import React, { useState } from 'react';
import '../assets/styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  DPSpaper from '../assets/images/DPS_Token_Whitepaper.pdf';
import { faChevronDown, faChevronUp, faShieldAlt, faBolt, faGlobe, faCoins, faRoad, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is DPS Token?',
      answer: 'DPS is a decentralized financial asset engineered for scalable applications on the TON blockchain, offering secure, efficient, and high-performance utility for modern digital finance.'
    },
    {
      question: 'How to join the presale?',
      answer: 'Connect your TON-compatible wallet, then go to the Swapping section to securely purchase DPS tokens during the presale.'
    },
    {
      question: 'Is staking available?',
      answer: 'Absolutely. DPS token holders can stake their tokens to earn periodic rewards and support network security.'
    },
    {
      question: 'Which wallet should I use?',
      answer: 'Connect your TON-compatible wallet—such as Tonkeeper, MyTonWallet, or Tonhub—for seamless interaction and maximum compatibility. Then navigate to the Swapping section to securely purchase DPS tokens during the presale.'
    }
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Decentralized Power System (DPS)</h1>
      <p className="about-description">
        DPS (Decentralized Power System) is a next-generation token engineered on the TON blockchain. It blends speed, transparency,
        and a decentralized ethos to redefine digital finance.
        

      </p>

      <div className="supply-section">
        <div className="card">
          <h2><FontAwesomeIcon icon={faGlobe} /> Total Supply</h2>
          <p>5,000,000,000 (5 Billion) DPS Tokens</p>
        </div>
        <div className="card">
          <h2><FontAwesomeIcon icon={faCoins} /> Presale Round 1</h2>
          <p>1,000,000 DPS Tokens</p>
        </div>
        <div className="card">
          <h2><FontAwesomeIcon icon={faCoins} /> Presale Round 2</h2>
          <p>500,000 DPS Tokens</p>
        </div>
      </div>

      <h2 className="section-title">Whitepaper Highlights</h2>
      <div className="grid-section">
        <div className="grid-card">
          <FontAwesomeIcon icon={faGlobe} size="2x" />
          <h3>Blockchain</h3>
          <p>Built on TON for scalable, secure, and fast transactions.</p>
        </div>
        <div className="grid-card">
          <FontAwesomeIcon icon={faBolt} size="2x" />
          <h3>Utility</h3>
          <p>Empowering staking, governance, swaps, and real-world integrations.</p>
        </div>
        <div className="grid-card">
          <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          <h3>Security</h3>
          <p>Audited smart contracts ensuring safety and transparency.</p>
        </div>
        <div className="grid-card">
          <FontAwesomeIcon icon={faWallet} size="2x" />
          <h3>Presale Vision</h3>
          <p>Inclusive, early community-driven token distribution model.</p>
        </div>
        <div className="grid-card">
          <FontAwesomeIcon icon={faRoad} size="2x" />
          <h3>Roadmap</h3>
          <p>Strategic rollout of features including pools, governance, and dApps.</p>
        </div>
      </div>

      <div className="whitepaper-section">
        <h2>DPS Whitepaper</h2>
        <p>
          Explore the in-depth DPS Tokenomics, utility cases, future roadmap, and technical architecture in our comprehensive whitepaper.
          <br />
          <strong>Download the DPS Token Whitepaper to learn more about our vision and roadmap.</strong>
          <br />
          <strong>Note:</strong> The whitepaper is a living document and will be updated as the project evolves.
        </p>
        <a href={DPSpaper} className="download-link" target='_blank' rel="noreferrer">Download Whitepaper (PDF)</a>

      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} />
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="social-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://t.me/dpstoken" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          <a href="https://twitter.com/dpstoken" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://facebook.com/dpstoken" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com/dpstoken" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
