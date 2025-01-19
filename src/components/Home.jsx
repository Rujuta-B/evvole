
import React,{useState} from 'react';
import '../style/home.css'
import logoV from '../assets/logoV.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import logoName from '../assets/logoName.svg';
import NotifyModal from './NotifyModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="full-screen-background">
      <img className="logo-v" src={logoV} alt="logo-v" />
      <div className="launching-text">
        <h1>LAUNCHING</h1>
        <h1>SOON!</h1>
      </div>

      <p>We are currently making some <br />
        improvements to our website!</p>
      {/* <button onClick={() => setIsModalOpen(true)}>NOTIFY ME</button> */}
      <a
        href='https://www.instagram.com/evvole_exims?igsh=MTEwbmJma25vdm1wMA=='
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <div className="instagram-content">
          <span>FOR MORE CONTENT CHECK OUT</span>
          <img className="insta-icon" src={instagramIcon} alt="instagram" />
        </div>
      </a>
      <img className="name-logo" src={logoName} alt="logo-name" />
      {isModalOpen &&   <NotifyModal isOpen={isModalOpen} setOpen={handleCloseModal} />}
    </div>
  )
}

export default Home