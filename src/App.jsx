import React from "react";
import "./App.css";
import StarRating from "./StarRating";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setValue(value);
  };

  const UserMood = ({ val }) => {
    switch (val) {
      case 1:
        return <span>need to cry</span>;
      case 2:
        return <span>need to eat candy</span>;
      case 3:
        return <span>need to take a walk</span>;
      case 4:
        return <span>are an optimist</span>;
      case 5:
        return <span>ate lying</span>;

      default:
        return <span>think...</span>;
    }
  };

  return (
    <div className="App">
      <StarRating onChange={handleChange} />
      {/* <h2>{value < 3 ? "need to cry" : null}</h2> */}
      <span>
        You <UserMood val={value} />
      </span>
    </div>
  );
}

export default App;
