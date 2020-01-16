import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [data, setData] = useState(null);

  const testData = () => {
    axios
      .get("/api/test") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setData(response.data.message);
      });
  };

  return (
    <div>
      <h1>Click button for test from express server</h1>
      <p>{data}</p>
      <button onClick={testData}>CLICK ME</button>
    </div>
  );
}
