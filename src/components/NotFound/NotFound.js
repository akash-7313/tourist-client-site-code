import React from 'react';
import notfound from '../../images/notfound/404.jpg';

const NotFound = () => {
    return (
      <div>
        <img className="w-100" src={notfound} alt="" />
      </div>
    );
};

export default NotFound;