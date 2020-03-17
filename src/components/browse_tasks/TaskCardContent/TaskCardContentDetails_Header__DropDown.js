import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import "../../../css/browse_tasks/PriceButton.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function TaskCardContentDetailsDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="dropdown-toggle"
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
        style={{
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgb(187, 194, 220)",
          borderImage: "initial",
          borderRadius: "6px",
          marginTop: "10px"
        }}
      >
        More Options
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{
          width: "100%"
        }}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <PostAddOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Post a Similar task" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <NotificationsActiveOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Ser up Alerts" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
