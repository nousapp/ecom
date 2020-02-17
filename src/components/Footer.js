import React from 'react';
import motorcycleIcon from '../assets/img/motorcycleIcon.png';
import '../styles/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="pageFooter">
        <div>
          <div>
            <img src={motorcycleIcon} alt="motorcycleIcon" />
          </div>
          <p>© 2020 Nous</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
