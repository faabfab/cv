import React from "react";
import Header from "./../components/cv/Header";
import User from "./../datas/user.json";
import Left from "../components/cv/Left";
import Content from "../components/cv/Content";
import "./../scss/cv/cv.scss";

function Cv() {
  return (
    <React.StrictMode>
      <div className="a4">
        <Header user={User} />
        <div className="container">
          <div className="container_left">
            <Left />
          </div>
          <div className="container_content">
            <Content />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Cv;
