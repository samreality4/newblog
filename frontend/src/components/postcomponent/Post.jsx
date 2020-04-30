import React, { useState } from "react";
import { Paper, Collapse, Grow, Divider } from "@material-ui/core";

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

  return (
<Grow in={true} timeout={{appear: 1000, enter: 1000, exit: 1000}}>
    <Paper
      className="m-3 p-2 text-left"
      elevation={elevation}
      style={{ width: "65%", color: "black", background: props.bcolor, boxShadow:"white" }}
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
          alt="post picture"
        /></div>
        <Divider />
        <p>{props.content}</p>
      </Collapse>
    </Paper>
    </Grow>
  );
}

export default Post;
