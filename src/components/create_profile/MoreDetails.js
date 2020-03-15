import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AvatarUpload from "./AvatarUpload";
import DetailContent from "./MoreDetails_Content";



const useStyles = makeStyles(theme => ({
  field: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(4),
    }
  }
}));

export default function MoreDetails(props) {
  const { handleChange, handleAvatar, handleLanguageSelector, values } = props;
  const classes = useStyles();

  return (
    <div className={classes.field}>
      <div className="title">
        <AvatarUpload values={values} handleChange={handleChange} handleAvatar={handleAvatar}/>
        <DetailContent values={values} handleChange={handleChange} handleLanguageSelector={handleLanguageSelector}/>
      </div>
    </div>
  );
}
