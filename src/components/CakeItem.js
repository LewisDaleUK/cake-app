import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CakeItem = ({ id, name, imageUrl }) => (
  <Link to={`/cake/${id}`}>
    <div className='cake'>
      <img src={imageUrl} alt={name} />
      <p className='cake-name'>{ name }</p>
    </div>
  </Link>
);

CakeItem.propTypes = {
  /**
   * The id number of the cake
   */
  id: PropTypes.number.isRequired,

  /**
   * The name of the cake
   */
  name: PropTypes.string.isRequired,

  /**
   * The url of the cake image
   */
  imageUrl: PropTypes.string.isRequired,
};

export default CakeItem;
