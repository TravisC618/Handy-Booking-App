import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Switch
      checked={state.checkedB}
      onChange={handleChange("checkedB")}
      value="checkedB"
      color="primary"
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
}
