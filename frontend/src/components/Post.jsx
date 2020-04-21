import React, { useRef, useState } from "react";
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

  return (
    <Paper
      onClick={onClick}
      className="m-3 p-2 text-left"
      elevation={elevation}
      style={{ width: "75%" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h2>{props.title}</h2>
      <Collapse in={clickState}>
        <p>{props.text}</p>
      </Collapse>
    </Paper>
  );
}

export default Post;
