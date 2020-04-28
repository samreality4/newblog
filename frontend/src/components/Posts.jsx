import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

function Posts() {
  const [postArray, setPostArray] = useState([
    {
      date: "Loading"
    }
  ]);

  useEffect(() => {
  
    async function getPosts() {
      try{
      const res = await axios.get("/data");
      setPostArray(res.data);
      console.log(res);
    }catch(err){
      console.log(err);
    }}
    getPosts();
  }, []);


  return (
    <div className="container-fluid p-0 row m-0 justify-content-center text-center">
      {postArray.map((item) => {
        return <Post title={item.title} content={item.content} bcolor={item.color} date={item.date} image={item.image}/>;
      })}
    </div>
  );
}

export default Posts;
