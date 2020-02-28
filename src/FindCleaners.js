import React from "react";
import Header from "./components/find_cleaners/Header";
import Booking from "./components/find_cleaners/Booking";
import Estimated from "./components/find_cleaners/Estimated";
import PostInfo from "./components/find_cleaners/PostInfo";
import "./css/find_cleaners/find-cleaners.css";
import Checkout from "./components/find_cleaners/Checkout";

const FindCleaners = props => {
  return (
    <section className="find-cleaners">
      <Header />
      <div className="container-fluid padding">
        <div className="row padding">
          <Checkout />
          {/* <PostInfo /> */}
          {/* <Booking /> */}
          {/* <Estimated /> */}
        </div>
      </div>
    </section>
  );
};

export default FindCleaners;
