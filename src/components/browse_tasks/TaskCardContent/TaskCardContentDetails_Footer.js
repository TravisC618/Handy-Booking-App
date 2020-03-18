import React from "react";
import Grid from "@material-ui/core/Grid";
import Comments from "./TaskCardContentDetails_Footer__Comments";

export default function TaskCardContentDetailsFooter() {
  return (
    <div className="TaskDetails-body">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Comments />
        </Grid>
      </Grid>
    </div>
  );
}
