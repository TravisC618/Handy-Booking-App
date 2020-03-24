import React from "react";
import "../../css/find_cleaners/header.css";
import headerImg from "../../img/find_header.jpg";

const Header = props => {
  return (
    <section className="page-header">
      <div className="container">
        <img src={headerImg} alt="cleaning" />
        <div className="mask" />
        <div className="page-header__caption">
          <h1 className="caption-title">Find A Cleaner The Easy Way</h1>
          <p className="caption-subtitle">
            Great value, no fuss, no obligation
          </p>
          <p>ONLY TAKES 2 MIN</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
