import React, { useState } from "react";

function App() {
  const [inMoused, outMoused] = useState(false);
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange() {
    setName(event.target.value);
  }
  function handleClick() {
    setHeading(name);
  }

  function Call() {
    outMoused(true);
  }
  function callout() {
    outMoused(false);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: inMoused ? "black" : "white" }}
          onMouseOver={Call}
          onMouseOut={callout}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
