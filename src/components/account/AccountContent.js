import React, { useEffect } from "react";
import Sidebar from "./siderbar/Sidebar";
import "../../css/account/account.scss";
import { Route, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import PaymentHistory from "./PaymentHistory";
import Notifications from "./Notifications";
import SettingProfile from "./profile/Profile";
import Password from "./settings/Settings";
import ViewTasks from "./ViewTasks";
import { useDispatch } from "react-redux";
import { UPDATE_USER_DETAIL_STATE } from "../../redux/actions/accountAction";
import { reqGetCustomer } from "../../api/customer";
import { getRoleId } from "../../utils/auth";
import "../../css/account/account-content.scss";

const AccountContent = props => {
  const { match } = props;
  const [isLoading, setIsLoading] = React.useState(true);

  const customerId = getRoleId("customer");
  const tradieId = getRoleId("tradie");
  const userRoleId = customerId || tradieId;

  console.log(userRoleId)



  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTaskDetail() {
      if (isLoading) {
        const response = await reqGetCustomer(userRoleId);
        const userDetails = response.data.data;
        dispatch({ type: UPDATE_USER_DETAIL_STATE, userDetails });
        setIsLoading(false);
      }
    }
    fetchTaskDetail();
  }, []);

  return (
    <div className="row">
      <div className="col-4 left-panel">
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
      <div className="col-8 right-panel">
        <Route
          path={`${match.path}/${userRoleId}/dashboard`}
          component={Dashboard}
        />
        <Route
          path={`${match.path}/${userRoleId}/payment-history`}
          component={PaymentHistory}
        />
        <Route
          path={`${match.path}/${userRoleId}/notifications`}
          component={Notifications}
        />
        <Route
          path={`${match.path}/${userRoleId}/profile`}
          component={SettingProfile}
        />
        <Route
          path={`${match.path}/${userRoleId}/password`}
          component={Password}
        />
        <Route
          path={`${match.path}/${userRoleId}/view-tasks`}
          component={ViewTasks}
        />
      </div>
    </div>
  );
};

export default withRouter(AccountContent);
