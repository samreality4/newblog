import React from "react";
import array from "../data";
import Post from "./Post";

function Posts() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center text-center">
      {array.map((item) => {
        return <Post title={item.title} text={item.text} />;
      })}
    </div>
  );
}

export default Posts;