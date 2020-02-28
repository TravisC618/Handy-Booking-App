import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ImageGallery from './TaskCardContentDetails_Body__Gallery';
import SimpleReactLightbox from "simple-react-lightbox";
import '../../css/browse_tasks/TaskCardContentDetails_Body__Expansion.css'

const useStyles = makeStyles(theme => ({

    heading: {
      fontSize: theme.typography.pxToRem(16),
      flexBasis: '75%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(10),
      color: theme.palette.text.secondary,
    },
  }));


const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {

    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function ControlledExpansionPanels() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary 
        aria-controls="panel2d-content" 
        id="panel2d-header" 
        expandIcon={<ExpandMoreIcon/>}
        style = {{padding:0}}
        >
            <Typography className={classes.heading} variant="h6" color='primary'>DETAILS</Typography>
            <Typography className={classes.secondaryHeading}>Click to Show Description</Typography>
        
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <SimpleReactLightbox>
                <ImageGallery />
            </SimpleReactLightbox>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}




