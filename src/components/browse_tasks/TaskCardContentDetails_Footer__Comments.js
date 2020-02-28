import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CommentBox } from './TaskCardContentDetails_Footer__Comments__Content';
import '../../css/browse_tasks/TaskCardContentDetails_Body__Offers.css';
import '../../css/browse_tasks/TaskCardContentDetails_Footer__Comments.css';
import '../../css/browse_tasks/LinesEllipsis.css';


const useStyles = makeStyles(theme => ({

    heading: {
      fontSize: theme.typography.pxToRem(16),
      flexShrink: 0,
      marginTop: '20px !important',
    },

  }));


export default function Comments() {
    const classes = useStyles();

  return (
    <div>
        <Typography className={classes.heading} variant="h6" color='primary'>QUESTIONS</Typography>
        <Typography className={classes.heading} variant="h5">
        Please don't share personal info – insurance won't apply to tasks not done through BYEDUST!
        </Typography>
        <div class="comments">
            <CommentBox />
        </div>
    </div>
  );
}




