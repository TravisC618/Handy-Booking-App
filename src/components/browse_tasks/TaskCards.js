import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TaskCardContent from './TaskCardContent';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    borderRadius: 10,
    margin:'10px 10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderLeft: '4px solid #3f51b5',
  },
  bgcolor: {
    background: '#f2f7f9',
  },

}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
        <div className={classes.bgcolor} />
      <CardActionArea>
        <CardContent>
            <TaskCardContent />

        </CardContent>
      </CardActionArea>

    </Card>
    
  );
}
