import React from "react";
import { Paper, Button } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

function Compose() {
  const date = new Date();
  const Label = styled.label`
    margin-bottom: 0px;
  `;

  return (
    <Paper className="w-50 h-auto m-5 p-2 mx-auto" elevation={4}>
      <form action="/compose" method="post">
        <div className="d-flex flex-column m-2 form-group">
          <Label for="date">Date</Label>
          <input
            className="form-control"
            id="date"
            value={date.toLocaleDateString("en-US")}
            name="date"
          ></input>
          <Label for="title">Title</Label>
          <input
            className="form-control"
            id="title"
            placeHolder="put your title"
            name="title"
          ></input>
          <Label for="content">Title</Label>
          <textarea
            className="form-control"
            rows="10"
            id="content"
            placeHolder="put your content"
            name="content"
          ></textarea>
          <Label for="color">Color</Label>
          <input className="form-control" id="color" name="color"></input>
          <Label for="image">Image Link</Label>
          <input className="form-control" id="image" name="image"></input>
          <Button variant="outlined" color="primary" type="subtmit">
            Compose
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default Compose;
