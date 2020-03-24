import React from "react";
import TaskCardContentDetails from "../../browse_tasks/task_card_content/TaskCardContentDetails";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const ViewTaskDetails = props => {
  const [isOpen, setIsOpen] = React.useState(true);

  const classes = useStyles();

  return (
    <Modal
      open={isOpen}
      onClose={props.history.goBack}
      closeAfterTransition
      className={classes.modal}
      BackdropProps={{
        timeout: 500
      }}
    >
      <TaskCardContentDetails />
    </Modal>
  );
};

export default ViewTaskDetails;
