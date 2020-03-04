import React, { useContext } from "react";
import { DetailContext } from "../../hooks/detailReducer";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SRLWrapper } from "simple-react-lightbox";
import { makeStyles } from '@material-ui/core/styles';
import img01 from "../../img/cleaner.jpg";
import '../../css/browse_tasks/TaskCardContentDetails_Body__Gallery.css';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const galleryOptions = {
  transitionTimingFunction: "ease",
  slideTransitionSpeed: 1000,
  buttonsIconPadding: "2px",
  buttonsIconColor: "rgba(25, 136, 124, 0.5)",
  enablePanzoom: true,
  hideControlsAfter: 0
};

export default function ImageGallery() {
    const classes = useStyles();
    const detailContext = useContext(DetailContext);
    const { taskDetails } = detailContext.detailState;
    const details = taskDetails.details;

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12}>    
        <Typography>
          {details}
        </Typography>     
      </Grid>

      <div className="imageGallery">
      <SRLWrapper options={galleryOptions}> 
      <div className="attachment-item"><img src={img01} alt="User uploaded images" /></div>
      <div className="attachment-item"><img src={img01} alt="User uploaded images" /></div>
      <div className="attachment-item"><img src={img01} alt="User uploaded images" /></div>
      <div className="attachment-item"><img src={img01} alt="User uploaded images" /></div>
      </SRLWrapper>
      </div>
    </Grid>
  </div>
  )
}

