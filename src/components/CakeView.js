import React from 'react';
import { Link } from 'react-router-dom';

const CakeView = ({ cake }) => (
  <div className="cake-view">
    <Link to="/">
    <div
      className="button"
      title="close"
    >
      X
    </div>
  </Link>
    <h2>{ cake.name }</h2>
    <img src={cake.imageUrl} alt={cake.name} />
    <p className="comment">
      { cake.comment }
    </p>
    <p className="yumfactor">{ cake.yumFactor }</p>
  </div>
);

export default CakeView;
