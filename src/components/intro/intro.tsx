import React from "react";

const Intro: React.FC = () => {
  return (
    <React.Fragment>
      <div className="intro intro--one"></div>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
      <div className="intro intro--two"></div>
    </React.Fragment>
  );
};
export default Intro;
