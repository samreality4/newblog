import React from "react";
import { Paper, Slide } from "@material-ui/core";


function About() {
  return (
    <Slide in={true} direction="up" timeout={{appear: 1000, enter: 1000, exit: 1000}}>
    <Paper className="mx-auto m-5 p-3" elevation={3} style={{width: "35%" ,background: "linear-gradient(72deg, rgba(193,34,195,1) 0%, rgba(45,253,97,1) 100%)"}}>
      <h1>About Fun Blog</h1>
      <p>
        Fun Blog is a blog site that log all the daily events with fun color and
        exciting pictures. And yes I am abusing the linear and radial gradient color here. They look amazing in my eyes.
      </p>
    </Paper>
    </Slide>
  );
}

export default About;

