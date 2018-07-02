import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import '../css/CakeItem.css';

const CakeItem = ({ id, name, imageUrl }) => (
  <Card className="cakeitem">
    <Link to={`/cake/${id}`}>
      <img src={imageUrl} alt={name} />
      <p className='cake-name'>{ name }</p>
    </Link>
  </Card>
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
