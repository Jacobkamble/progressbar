import React, { useEffect } from "react";

const Progressbar = ({value=0,onComplete=()=>{}}) => {

  

  useEffect(()=>{
    if (value >= 100) {
      onComplete();
    }
  },[value])

  return (
    <div className="progress-bar-container">
    <div
      className="progress-bar"
      style={{ width: `${value}%` }}
    ></div>
    <span className="progress-text">{value}%</span>
  </div>
  );
};

export default Progressbar;
