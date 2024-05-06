import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating maxRating={5} />
  </React.StrictMode>
);
