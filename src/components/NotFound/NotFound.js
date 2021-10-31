import React from 'react';
import notfound from '../../images/notfound/404.jpg';

const NotFound = () => {
  const notFoundStyle = {
    width:'100vw',
    height:'500px'
  }
    return (
      <div>
        <img
          className="img-fluid"
          style={notFoundStyle}
          src={notfound}
          alt=""
        />
      </div>
    );
};

export default NotFound;