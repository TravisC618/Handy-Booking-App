import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography } from "@material-ui/core";
import { reqGetCustomer, reqGetTradie } from "../../../api/customer";
import { getRoleId } from "../../../utils/auth";
import { classList } from "../view_tasks/utils";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content"
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: 10
  }
}));

const Profile = props => {
  const { className, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [role, setRole] = useState("");

  const classes = useStyles();

  useEffect(() => {
    const updatePageData = async () => {
      setLoading(true);
      try {
        await reqGetCustomer(getRoleId("customer")).then(res => {
          setName(res.data.data.name);
          setAvatar(res.data.data.avatar);
          setRole("Customer");
        });
      } catch (e) {
        await reqGetTradie(getRoleId("tradie")).then(res => {
          setName(res.data.data.name);
          setAvatar(res.data.data.avatar);
          setRole("Tradie");
        });
      }
      setLoading(false);
    };
    updatePageData();
    
  }, []);


  const user = {
    name,
    avatar,
    role
  };

  return (
    !loading ?
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Chip
        icon={<FaceIcon />}
        label={role}
        color={classList({
          primary: role === "Tradie",
          secondary: role === "Customer"
        })}
        style={{ margin: 20, width: "40%" }}
      />
    </div>
    :
    <div {...rest} className={clsx(classes.root, className)}>
    <CircularProgress />
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
