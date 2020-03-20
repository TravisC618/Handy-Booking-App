import React from "react";
import Header from "../components/find_cleaners/Header";
import "../css/find_cleaners/find-cleaners.css";
import PostTaskMain from "../components/find_cleaners/PostTaskMain";

const FindCleaners = props => {
  return (
    <section className="find-cleaners">
      <Header />
      <div className="container-fluid padding">
        <div className="row padding">
          <PostTaskMain />
        </div>
      </div>
    </section>
  );
};

export default FindCleaners;
