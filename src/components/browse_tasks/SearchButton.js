import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function SearchButton() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <Input placeholder="Search for a task" inputProps={{ 'aria-label': 'description' }} />
      <IconButton type="submit" color='primary' className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
}
