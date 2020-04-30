import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

function Posts() {
  const [postArray, setPostArray] = useState([
    {
      date: "12/24/2021",
      color: "linear-gradient(48deg, rgba(63,180,251,1) 18%, rgba(164,122,21,1) 87%)" 
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
      {postArray.map((item, index) => {
        return <Post id={item._id} title={item.title} content={item.content} bcolor={item.color} date={item.date} image={item.image} index={index} />;
      })}
    </div>
  );
}

export default Posts;
