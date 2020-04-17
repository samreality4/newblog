import React from "react";
import { Paper, Collapse } from "@material-ui/core";

function Post(props) {
  return (
    <Paper elevation={2}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </Paper>
  );
}

export default Post;
