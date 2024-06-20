import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    JavaScript: false,
    React: false,
    CSS: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    setInterests({
      ...interests,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm Tim Barasa</h1>
      <img alt="My profile pic" src="Tim.jpg" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="JavaScript"
              checked={interests.JavaScript}
              onChange={handleCheckboxChange}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              name="React"
              checked={interests.React}
              onChange={handleCheckboxChange}
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              name="CSS"
              checked={interests.CSS}
              onChange={handleCheckboxChange}
            />
            CSS
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>Thank you for signing up, {name}!</p>
      )}
    </main>
  );
}

export default App;
