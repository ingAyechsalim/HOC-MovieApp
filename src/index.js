import React from "react";
import ReactDOM from "react-dom";
import Movies from "./AppMOVIE";
import "./styles.css";

function App() {
  return (
    <div className="loading">
      <Movies />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
