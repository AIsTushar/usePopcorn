import React from "react";
import ReactDOM from "react-dom/client";
import StartRating from "./components/StartRating";
import { useState } from "react";

import "./index.css";
import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StartRating color="blue" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StartRating size={24} color="red" defaultRating={3} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
