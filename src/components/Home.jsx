import '../styles/home.css';
import logoV from '../assets/logo-v.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import logoName from '../assets/logo-name.svg';

const Home = () => {
  return (
    <div className="full-screen-background">
        <img src={logoV} alt="logo-v" />
        <h1>LAUNCHING <br />SOON!</h1>
        <p>We are currently making some <br />
          improvements to our website!</p>
        <button>NOTIFY ME</button>
        <a
          href='https://www.instagram.com/evvole_exims?igsh=MTEwbmJma25vdm1wMA=='
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="insta-icon" src={instagramIcon} alt="instagram" />
        </a>
        <img className="name-logo" src={logoName} alt="logo-name" />
      </div>
  )
}

export default Home