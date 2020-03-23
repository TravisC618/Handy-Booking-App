import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import paypalIcon from "../../../../img/icons/paypal-icon.svg";
import MoneyIcon from "@material-ui/icons/Money";
import CreditCardIcon from "@material-ui/icons/CreditCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  paypalIcon: {
    width: "60%"
  }
}));

export default function PaymentMethod() {
  const classes = useStyles();
  const [radio, setRadio] = React.useState(2);

  const handleToggle = index => () => {
    setRadio(index);
  };

  const renderIcons = index => {
    switch (index) {
      case 0:
        return (
          <img src={paypalIcon} alt="paypal" className={classes.paypalIcon} />
        );
      case 1:
        return <CreditCardIcon />;
      case 2:
        return <MoneyIcon />;
      default:
        return;
    }
  };

  return (
    <List className={classes.root}>
      <RadioGroup aria-label="payment" name="payment" value={radio}>
        {["Paypal", "Credit card", "Cash"].map((text, index) => {
          const labelId = `checkbox-list-label-${index}`;

          return (
            <ListItem
              key={index}
              role={undefined}
              dense
              button
              onClick={handleToggle(index)}
            >
              <ListItemAvatar>
                <Avatar>{renderIcons(index)}</Avatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={text} />
              <ListItemIcon>
                <FormControlLabel value={index} control={<Radio />} />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </RadioGroup>
    </List>
  );
}
