import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = props => {
  const { location } = props;
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  //TODO need to changed ENDPOINT expression
  //   const ENDPOINT = `https://byedust-api-server.herokuapp.com/api`;
  const ENDPOINT = `localhost:4000`;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return <h1>CHat</h1>;
};

export default withRouter(Chat);
