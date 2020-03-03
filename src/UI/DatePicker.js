import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function DatePicker(props) {
  // The first commit of Material-UI
  const { handleChange, values } = props;

  const [selectedDate, setSelectedDate] = React.useState(values.date);

  const handleDateChange = date => {
    setSelectedDate(date);
    const data = { name: "date", value: date };
    handleChange(data);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
          disablePast
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
