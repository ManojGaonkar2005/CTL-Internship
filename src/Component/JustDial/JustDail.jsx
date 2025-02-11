import React from 'react';
import "./JustDail.css";
import { menu,last } from './Card';

const JustDail = () => {
  return (
    <div className="R-Container">
      <div className="R-Options">
        <div></div>
        {menu.map((item)=>(
          <div key={item.id} className="menu-items">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          
        ))}
          {last.map((litem)=>(
            <div className="menu-items">
              <span className="Litem">
            <img src={litem.image} alt="" /></span>
            <p>{litem.title}</p>
          </div>
          ))}
      </div>
    </div>
  );
};

export default JustDail;