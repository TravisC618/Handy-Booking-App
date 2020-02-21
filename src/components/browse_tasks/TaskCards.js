import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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

function StyledCard() {

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

  )
} 

export class TaskCard extends Component {

  render() {

      return (
        <div>
            <StyledCard />
        </div>
      )
  }
};
