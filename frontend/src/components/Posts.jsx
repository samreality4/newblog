import React, { useState, useEffect } from "react";
import array from "../data";
import Post from "./Post";
import axios from "axios";

function Posts() {
  const [postArray, setPostArray] = useState([
    {
      title: "",
      content: "",
      color: "",
      date: "",
    }
  ]);

  // useEffect(() => {
  //   async function getPosts() {
  //     const res = await axios.get("/");
  //     setPostArray(res.data);
  //   }
  //   getPosts();
  // }, []);


  return (
    <div className="container-fluid p-0 row m-0 justify-content-center text-center">
      {postArray.map((item) => {
        return <Post title={item.title} content={item.content} bcolor={item.color} date={item.date}/>;
      })}
    </div>
  );
}

export default Posts;
