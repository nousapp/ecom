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
        <div className="title">
          <div className="gray">
            <h1 className="pageTitle">Find Your Motorcycle Parts</h1>
            <h3 className="makeTitle">Select your make:</h3>

        <section className="cardGrid">
          {makeInfo.map(member => (
            <Card
              key={member.name}
              img={member.src}
              name={member.name}
            />
          ))}
        </section>
          </div>
        </div>
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
