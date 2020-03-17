import React from 'react';
import Grid from '@material-ui/core/Grid';
import ControlledExpansionPanels from './TaskCardContentDetails_Body__Expansion';
import Offers from './TaskCardContentDetails_Body__Offers';
import Divider from '@material-ui/core/Divider';



export default function TaskCardContentDetailsBody() {

    return (
      <div className='TaskDetails-body'>
        <Grid container spacing={3}>
            <Grid item xs={12}>  
            <ControlledExpansionPanels />
            <Offers />    
            </Grid>
        </Grid>
        <Divider style={{marginTop:20}}/>
      </div>
    )
}




