import React from 'react';
import PropTypes from 'prop-types';
import Cake from './Cake';

const CakeList = ({ cakes }) => (
  <div className="cakelist">
    {
      cakes.map(cake => (
        <Cake
          key={cake.id}
          id={cake.id}
          name={cake.name}
          imageUrl={cake.imageUrl}
        />
      ))
    }
  </div>
);

CakeList.propTypes = {
  /**
   * A list of cake objects
   */
  cakes: PropTypes.arrayOf(
    PropTypes.shape({
      'id': PropTypes.number.isRequired,
      'name': PropTypes.string.isRequired,
      'comment': PropTypes.string.isRequired,
      'imageUrl': PropTypes.string.isRequired,
      'yumFactor': PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CakeList;
