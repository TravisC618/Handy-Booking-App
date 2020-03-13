import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AvatarUpload from "./AvatarUpload";
import DetailContent from "./MoreDetails_Content";

const useStyles = makeStyles(theme => ({
  field: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(4),
      width: 200
    }
  }
}));

export default function MoreDetails(props) {
  const { handleChange, values } = props;
  const classes = useStyles();

  return (
    <div className={classes.field}>
      <div className="title">
        <AvatarUpload values={values} handleChange={handleChange}/>
        <DetailContent />

      </div>
    </div>
  );
}
