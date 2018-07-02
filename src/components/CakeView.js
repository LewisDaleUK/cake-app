import React from 'react';
import { withRouter } from 'react-router';

const CakeView = ({ cake, history }) => (
  <div className="cake-view">
    <div
      className="button"
      title="close"
      onClick={() => history.push('/')}
    >
      X
    </div>
    <h2>{ cake.name }</h2>
    <img src={cake.imageUrl} alt={cake.name} />
    <p className="comment">
      { cake.comment }
    </p>
    <p className="yumfactor">{ cake.yumFactor }</p>
  </div>
);

export default withRouter(CakeView);
