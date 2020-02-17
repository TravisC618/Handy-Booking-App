import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Menu from "@material-ui/core/Menu";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import PriceButtonContent from "./PriceButtonContent";
import "../../css/browse_tasks/PriceButton.css";


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
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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

export default function PriceButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

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
      >
        Any price
      </Button>

      <StyledMenu
        id="customized-menu"
        class="modal-content"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="dropdown-menu-content-price">
          <PriceButtonContent />
          <hr />
          <div className="NavButtonContentFooter">
            <div style={{ margin: 10 }}>
              <Grid container spacing={3}>
                <Grid xs>
                  <div className={classes.root}>
                    <Button onClick={handleClose}>Cancel</Button>
                  </div>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid xs>
                  <div className={classes.root}>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="primary"
                    >
                      Apply
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </StyledMenu>
    </div>
  );
}
