import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import TrendingDownRoundedIcon from "@material-ui/icons/TrendingDownRounded";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: 130,
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    alignSelf: "center"
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  paper: {
    margin: theme.spacing(1)
  },
  svg: {
    width: 50,
    height: 50
  }
}));

export default function PriceSorted(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const { sortOrder, setSortOrder } = props;
  const ASCENDING_SORT = "budget";
  const DESCENDING_SORT = "-budget";

  const handleChange = event => {
    const isChecked = event.target.checked;
    setChecked(prev => !prev);
    setSortOrder(isChecked ? ASCENDING_SORT : "");
  };

  const handleSortedSelect = order => {
    setSortOrder(order);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Sorted by price?"
        color="primary"
        className={classes.formControl}
      />
      <div className={classes.container}>
        <Zoom in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <Button onClick={() => handleSortedSelect(ASCENDING_SORT)}>
              <svg className={classes.svg}>
                <TrendingUpRoundedIcon
                  color={
                    sortOrder === ASCENDING_SORT ? "secondary" : "disabled"
                  }
                  fontSize="small"
                />
              </svg>
            </Button>
          </Paper>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "500ms" : "0ms" }}
        >
          <Paper elevation={4} className={classes.paper}>
            <Button onClick={() => handleSortedSelect(DESCENDING_SORT)}>
              <svg className={classes.svg}>
                <TrendingDownRoundedIcon
                  color={
                    sortOrder === DESCENDING_SORT ? "secondary" : "disabled"
                  }
                  fontSize="small"
                />
              </svg>
            </Button>
          </Paper>
        </Zoom>
      </div>
    </div>
  );
}
