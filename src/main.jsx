import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" defaultRating={2} /> */}
    <App />
  </React.StrictMode>
);
