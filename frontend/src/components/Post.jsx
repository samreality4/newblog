import React, { useState } from "react";
import { Paper, Collapse, Divider } from "@material-ui/core";

function Post(props) {
  const [elevation, setElevation] = useState();
  const [clickState, setClickState] = useState(false);

  function onMouseEnter() {
    setElevation(15);
  }

  function onMouseLeave() {
    setElevation(2);
  }

  function onClick() {
    setClickState(!clickState);
  }

  console.log(props.bcolor);

  return (
    <Paper
      className="m-3 p-2 text-left"
      elevation={elevation}
      style={{ width: "65%", color: "black", background: props.bcolor }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
      <h2>{props.title}</h2>
      <h3>{new Date(props.date).toLocaleDateString("en-US")}</h3>
      </div>
      <Collapse in={clickState}>
        <Divider />
        <div className="text-center">
        <img
          className="img-fluid"
          src={props.image}
        /></div>
        <Divider />
        <p>{props.content}</p>
      </Collapse>
    </Paper>
  );
}

export default Post;
