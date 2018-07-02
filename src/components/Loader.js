import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/Loader.css';

const Loader = () => (
  <div className="loader">
    <CircularProgress size={150} />
  </div>
);

export default Loader;
