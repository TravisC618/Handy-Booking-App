import React, { Component } from "react";
import RangeButton from "./RangeButton";
import PriceButton from "./PriceButton";
import TypeButton from "./TypeButton";
import SearchButton from "./SearchButton";
import "../../css/browse_tasks/task-nav.css";
import "../../css/browse_tasks/searchbar.css";

class TaskNav extends Component {
  render() {
    return (
      
      <ul class="nav nav-tabs justify-content-center">
        <div className="TaskNav">
        <li class="nav-item">
          <RangeButton />
        </li>
        <li class="nav-item">
          <PriceButton />
        </li>
        <li class="nav-item">
          <TypeButton />
        </li>
        <li class="nav-item">
        <SearchButton />
        </li>
        </div>
      </ul>    

    );
  }
}

export default TaskNav;
