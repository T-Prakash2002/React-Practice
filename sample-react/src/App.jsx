import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name,index) => <li key={index}>{name}</li>);
  return <ul>{listItems}</ul>;
}

export default App;

// Unique Key is not mentioned
// after commit this code
