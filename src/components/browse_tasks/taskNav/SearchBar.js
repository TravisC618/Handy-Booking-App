import React from "react";
import { useDispatch } from "react-redux";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  RESET_ITEM,
  UPDATE_SEARCH_KEY
} from "../../../redux/actions/taskAction";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.55),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const handleSearch = (event, dispatch) => {
  const searchKey = event.target.value;
  if (event.key === "Enter") {
    dispatch({ type: RESET_ITEM });
    dispatch({ type: UPDATE_SEARCH_KEY, searchKey });
  }
};

export default function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        onKeyPress={event => handleSearch(event, dispatch)}
      />
    </div>
  );
}
