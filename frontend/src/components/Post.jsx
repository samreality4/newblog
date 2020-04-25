import React, { useState } from "react";
import { Paper, Collapse } from "@material-ui/core";

function Post(props) {
  const [elevation, setElevation] = useState();
  const [clickState, setClickState] = useState(false);

  function onMouseEnter() {
    setElevation(10);
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
      style={{ width: "75%", backgroundColor: props.bcolor }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h2>{new Date(props.date).toLocaleDateString("en-US")}</h2>
      <h2>{props.title}</h2>
      <Collapse in={clickState}>
        <img src={props.image}></img>
        <p>{props.content}</p>
      </Collapse>
    </Paper>
  );
}

export default Post;
