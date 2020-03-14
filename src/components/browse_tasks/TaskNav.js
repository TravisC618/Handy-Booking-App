import React, { Component } from "react";
import RangeButton from "./RangeButton";
import PriceButton from "./PriceButton";
import TypeButton from "./TypeButton";
import SearchButton from "./SearchButton";
import ShowMapButton from "./ShowMapButton";

class TaskNav extends Component {
  render() {
    return (
      <>
        <ul className="secondary-menu">
          <li className="menu-item">
            <RangeButton />
          </li>
          <li className="menu-item">
            <PriceButton />
          </li>
          <li className="menu-item">
            <TypeButton />
          </li>
          <li className="menu-item">
            <ShowMapButton />
          </li>
        </ul>
        <div className="search-bar">
          <SearchButton />
        </div>
      </>
    );
  }
}

export default TaskNav;
