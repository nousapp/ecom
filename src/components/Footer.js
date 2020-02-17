import React from 'react';
import auraLogo from '../assets/img/auraLogo.png';
import '../styles/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="pageFooter">
        <div>
          <div>
            <img src={auraLogo} alt="auraLogo" />
          </div>
          <p>© 2020 Nous</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
