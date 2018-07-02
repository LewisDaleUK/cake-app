import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CakeItem from './CakeItem';
import '../css/CakeList.css';

const CakeList = ({ cakes, history }) => (
  <div className="cakelist">
    {
      cakes.map(cake => (
        <CakeItem
          key={cake.id}
          id={cake.id}
          name={cake.name}
          imageUrl={cake.imageUrl}
        />
      ))
    }

    <Button
      variant="fab"
      color="primary"
      aria-label="Add"
      onClick={() => history.push('/cake/create')}
    >
      <AddIcon />
    </Button>
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

export default withRouter(CakeList);
