import React from "react";
import { useSpring, animated } from "react-spring";
import { Zoom } from "@material-ui/core";

export default function AnimatedBg() {
  const style = useSpring({
    from: {position: "fixed", bottom: "50%", left: "0%" },
    to: async (next) => {
      while (1) {
        await next({
          left: "85%",
        });
        await next({
          left: "0%",
        });
      }
    },
  });
  return (
    <React.Fragment>
      <Zoom in="true">
        <div className="text-center" style={{marginTop: "10%"}}>
          <h1>Hello Wooooo!</h1>
        </div>
      </Zoom>
      <animated.div style={style}>
        <img src="/images/SXG.png" alt="logo" />
      </animated.div>
    </React.Fragment>
  );
}
