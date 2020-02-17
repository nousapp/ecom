import React from 'react';
import PropTypes from 'prop-types';

// components
import Head from './Head';
import Card from '../components/Card';
// helpers
import makeObj from '../data/makeInfo';
import background from '../assets/img/trinityBackgroundWhite.png';
// scss
import '../styles/Home.scss';

class Home extends React.Component {
  render() {
    const {
      location: { pathname: pathName },
    } = this.props;
    const makeInfo = Object.values(makeObj);
    return (
      <main background={background}>
        <Head pathName={pathName} title="Home | Aura" />
        <section className="cardGrid">
          {makeInfo.map(member => (
            <Card
              key={member.fullName}
              img={member.src}
              fullName={member.fullName}
              role={member.role}
              mailLink={member.mailLink}
            />
          ))}
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Home;
