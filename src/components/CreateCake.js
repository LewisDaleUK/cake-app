import React from 'react';
import PropTypes from 'prop-types';

const CreateCake = ({ onSubmit, onValueChange, cake }) => (
  <div className='cake-create'>
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        value={cake.name}
        onChange={e => onValueChange('name', e.target.value)}
      />

      <label htmlFor="comment">Comment</label>
      <textarea
        id="comment"
        name="comment"
        value={cake.comment}
        onChange={e => onValueChange('comment', e.target.value)}
      />
      <label htmlFor="imageurl">Image URL</label>
      <input
        type="text"
        placeholder="Image URL"
        id="imageurl"
        name="imageUrl"
        value={cake.imageUrl}
        onChange={e => onValueChange('imageUrl', e.target.value)}
      />
      <label htmlFor="yumfactor">Yum Factor</label>
      <select
        name="yumFactor"
        id="yumfactor"
        value={cake.yumFactor}
        onChange={e => onValueChange('yumFactor', parseInt(e.target.value, 10))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button value="submit">Submit</button>
    </form>
  </div>
);

CreateCake.propTypes = {
  /**
   * Function to call when the "submit" button is pressed
   */
  onSubmit: PropTypes.func.isRequired,

  /**
   * Function to call when the value of an input is changed. Takes two arguments:
   * 'key' and 'value'.
   */
  onValueChange: PropTypes.func.isRequired,

  /**
   * The current state of the cake being submitted
   */
  cake: PropTypes.shape({
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    yumFactor: PropTypes.number.isRequired,
  }).isRequired,
};

export default CreateCake;
