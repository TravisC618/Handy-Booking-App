import React from "react";
import TextField from "@material-ui/core/TextField";

class PostInfo extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          label="Title"
          variant="outlined"
          placeholder="What do you need done?"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
      </form>
    );
  }
}

export default PostInfo;
