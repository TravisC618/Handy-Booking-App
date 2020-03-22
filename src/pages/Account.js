import React from "react";
import AccountContent from "../components/account/AccountContent";
import "../css/account/account.css";

const Account = props => {
  return (
    <div className="account">
      <div className="row account__page">
        <div className="col-12 account__content">
          <AccountContent />
        </div>
      </div>
    </div>
  );
};

export default Account;
