import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import '../css/CreateCake.css';

const CreateCake = ({ onSubmit, onValueChange, cake }) => (
  <div className='cake-create'>
    <form onSubmit={onSubmit}>
      <TextField
        id="name"
        label="Name"
        value={cake.name}
        onChange={e => onValueChange('name', e.target.value)}
      />
      <TextField
        id="comment"
        label="Comment"
        value={cake.comment}
        onChange={e => onValueChange('comment', e.target.value)}
        multiline
        rows="4"
      />
      <TextField
        id="imageurl"
        label="Image URL"
        value={cake.imageUrl}
        onChange={e => onValueChange('imageUrl', e.target.value)}
      />

      <InputLabel htmlFor="yum-factor">Yum Factor</InputLabel>
      <Select
        value={cake.yumFactor}
        onChange={e => onValueChange('yumFactor', parseInt(e.target.value, 10))}
        inputProps={{ name: 'yum-factor', id: 'yum-factor' }}
        label='Yum Factor'
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <Button onClick={onSubmit} color="primary">Submit</Button>
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
