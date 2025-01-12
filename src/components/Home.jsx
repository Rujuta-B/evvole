import '../style/home.css'
import logoV from '../assets/logoV.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import logoName from '../assets/logoName.svg';

const Home = () => {
  return (
    <div className="full-screen-background">
      <img className="logo-v" src={logoV} alt="logo-v" />
      <div className="launching-text">
        <h1>LAUNCHING</h1>
        <h1>SOON!</h1>
      </div>

      <p>We are currently making some <br />
        improvements to our website!</p>
      <button onClick={() => console.log('first')}>NOTIFY ME</button>
      <a
        href='https://www.instagram.com/evvole_exims?igsh=MTEwbmJma25vdm1wMA=='
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <h6>For more contenct checkout our Instagram</h6> */}
        <img className="insta-icon" src={instagramIcon} alt="instagram" />
      </a>
      <img className="name-logo" src={logoName} alt="logo-name" />
    </div>
  )
}

export default Home