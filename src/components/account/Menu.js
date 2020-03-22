// import React from "react";
// import { Route, Link, withRouter } from "react-router-dom";
// import {
//   ACCOUNT_BASE_URL,
//   ACCOUNT_DASHBOARD_URL,
//   ACCOUT_PAYMENT_HISTORY_URL,
//   ACCOUT_NOTIFICATIONS_URL,
//   ACCOUNT_PROFILE_URL,
//   ACCOUNT_PASSWORD_URL
// } from "../../routes/URLMAP";
// import Dashboard from "./Dashboard";
// import PaymentHistory from "./PaymentHistory";
// import Notifications from "./Notifications";
// import Profile from "./profile/Profile";
// import Password from "./settings/Settings";

// import "../../css/account/menu.css";

// import { makeStyles } from "@material-ui/core/styles";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Sidebar from "./siderbar/Sidebar";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     boxShadow: "none",
//     backgroundColor: "#f2f7f9",
//     margin: 0,
//     padding: 0
//   },

//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//     boxShadow: "none",
//     backgroundColor: "#f2f7f9",
//     margin: 0,
//     padding: 0
//   }
// }));

// const Menu = props => {
//   const classes = useStyles();

//   const { match } = props;
//   return (
//     <div className="menu">
//       <div className="menu__user">
//         <div className="menu__user-avatar"></div>
//         <div className="menu__user-name">User Name</div>
//       </div>
//       <div className="menu__list">
//         <div className="menu-folder expanded">
//           <div className="menu-folder-items showing">
//             <Link className="button" to={`${ACCOUNT_BASE_URL}/dashboard`}>
//               Dashboard
//             </Link>
//             <Link className="button" to={`${ACCOUNT_BASE_URL}/payment-history`}>
//               PaymentHistory
//             </Link>
//             <Link className="button" to={`${ACCOUNT_BASE_URL}/notifications`}>
//               Notifications
//               <span className="number notifications-count off">0</span>
//             </Link>
//           </div>
//         </div>

//         <ul>
//           <li className="dropdown">
//             <input type="checkbox" />
//             <a href="#" data-toggle="dropdown">
//               Settings
//             </a>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link
//                   className="dropdown-link"
//                   to={`${ACCOUNT_BASE_URL}/profile`}
//                 >
//                   Account
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="dropdown-link"
//                   to={`${ACCOUNT_BASE_URL}/password`}
//                 >
//                   Password
//                 </Link>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <Route path={`${match.path}/dashboard`} component={Dashboard} />
//       <Route
//         path={`${match.path}/payment-history`}
//         component={PaymentHistory}
//       />
//       <Route path={`${match.path}/notifications`} component={Notifications} />
//       <Route path={`${match.path}/profile`} component={Profile} />
//       <Route path={`${match.path}/password`} component={Password} />
//     </div>
//   );
// };

// export default withRouter(Menu);
