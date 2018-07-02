import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../css/CakeView.css';

const CakeView = ({ cake }) => (
  <div className="cake-view">
    <Card>
      <Link to="/">
        <CloseIcon style={{ width: 40, height: 40 }}/>
      </Link>
      <img src={cake.imageUrl} alt={cake.name} />
      <CardContent>
        <h2>{ cake.name }</h2>
        <p className="comment">
          { cake.comment }
        </p>
        <p className="yumfactor">Yum Factor: { cake.yumFactor }</p>
      </CardContent>
    </Card>
  </div>
);

export default CakeView;
