import React from 'react';
import PropTypes from 'prop-types';

// Components
import Head from './Head';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      location: { pathname: pathName },
    } = this.props;

    return (
      <main>
        <Head pathName={pathName} title="Home | Aura" />
        <p>This is home</p>
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
