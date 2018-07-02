import React from 'react';
import PropTypes from 'prop-types';

const CakeItem = ({ id, name, imageUrl }) => (
  <div className='cake'>
    <img src={imageUrl} alt={name} />
    <p className='cake-name'>{ name }</p>
  </div>
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
