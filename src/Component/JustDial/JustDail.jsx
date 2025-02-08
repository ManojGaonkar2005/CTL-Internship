import React from 'react';
import "./JustDail.css";
import { menu } from './Card';

const JustDail = () => {
  return (
    <div className="R-Container">
      <div className="R-Options">
        {menu.map((item)=>(
          <div key={item.id} className="menu-items">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default JustDail;