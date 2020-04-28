import React from "react";
import { Paper } from "@material-ui/core";

function About() {
  return (
    <Paper className="mx-auto p-3" elevation={3} style={{width: "35%"}}>
      <h1>About Fun Blog</h1>
      <p>
        Fun Blog is a blog site that log all the daily events with fun color and
        exciting pictures.
      </p>
    </Paper>
  );
}

export default About;