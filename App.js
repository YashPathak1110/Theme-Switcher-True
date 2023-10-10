import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import "./App.css";
import { ThemeContext, themes } from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState(themes.light);

  //btn
  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <div className="main-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={"300px"} height={"260px"}></img><br></br>
          <h1 className="text-center"><b>Light Dark Theme App</b></h1><br></br>
          <Posts theme={theme} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;