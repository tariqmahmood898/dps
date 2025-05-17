import "../assets/styles/Login.css"; // Import your CSS file
import payImage from '../assets/images/future.png';

const LoginPage = () => {
  return (
    <div className="home-container">
      <div className="login-section">
        <img src={payImage} alt="DPS Crypto Token" className="login-image" />

        <div className="login-text">
          <h1> Welcome to the DPS Platform Secure and Fast </h1>
          <p> 

            The decentralized application is currently under development and will be launched soon. 
            Our team is working diligently to build a secure, efficient, and user-friendly platform tailored to meet the needs of our growing community. 
            We are focused on delivering a seamless experience that aligns with
            the latest advancements in blockchain technology. Please stay tuned — exciting updates,
            new features, and improvements are on the way. 
            Your patience and support are greatly appreciated.



            



          </p>


        </div>
      </div>



      <div className="cnt-card left-card">
        <div class="row">

<div class="box">🛠 Building a Better WebWe are creating a decentralized experience that empowers users and ensures transparency. </div>

<div class="box">⏳ Development in Progress Our team is actively working to deliver a powerful and user-friendly DApp with advanced blockchain features.</div>

<div class="box">✅ Secure. Decentralized. Fast.We prioritize security, decentralization, and lightning-fast performance to bring you the best Web3 experience.</div>




</div>









      </div>


    </div>
  );
};

export default LoginPage;
