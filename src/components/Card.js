import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { img, name } = this.props;
    return (
      <div className="cardContainer">
        <div
          className='card'
          tabIndex="0"
          role="button"
        >
          <div className="side">
            <img className="cardImage" src={img} alt={`${name} card image`} />
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
