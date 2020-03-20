import React from "react";
import Sidebar from "./siderbar/Sidebar";
import "../../css/account/account.scss";

const AccountContent = props => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
};

export default AccountContent;
