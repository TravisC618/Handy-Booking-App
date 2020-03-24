import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import "../../../css/account/chat_app/chatbox.scss";
import InfoBar from "./InfoBar";
import InputChat from "./InputChat";
import Messages from "./Messages";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let socket;

function ChatBox({
  history,
  location: {
    state: { name: username, taskTitle }
  }
}) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //TODO need to changed ENDPOINT expression
  const ENDPOINT = `https://byedust-api-server.herokuapp.com/`;

  const handleClose = () => {
    history.goBack();
  };

  useEffect(() => {
    socket = io(ENDPOINT);

    setName(username);
    setRoom(taskTitle);

    console.log(`username`, username);
    console.log(`taskTitle`, taskTitle);

    socket.emit("join", { name: username, room: taskTitle }, error => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, taskTitle, username]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(message, messages);

  return (
    <div>
      <Dialog
        fullScreen
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Chat room
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="chatbox-outerContainer">
          <div className="chatbox-container">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <InputChat
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default withRouter(ChatBox);
