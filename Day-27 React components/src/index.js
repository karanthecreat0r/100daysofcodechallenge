import React from "react";
import ReactDom from "react-dom";

const name = "karan";
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const sname = "React";
const date = new Date();
const currentTime = date.getHours();
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200";
let greeting;
if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hi {greeting} Welcome {name} to React
    </h1>
    <h3>Today's Lucky Number {Math.floor(Math.random() * 10)} </h3>
    <ul>
      <li>Starting with </li>
      <li>JSX</li>
      <li>Its alwasys React wooo!!!</li>
    </ul>
    <h4>{`${name} ${sname}`} lorem ipsum text</h4>
    <p>{lorem}</p>
    <div>
      <img src={img + "?grayscale"} />
      <img src={img + "?grayscale"} />
      <img src={img + "?grayscale"} />
    </div>

    <footer>copyright karansparrow {year}</footer>
  </div>,
  document.getElementById("root")
);
