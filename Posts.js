import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div>
      <h4 className="h4">My Post With {theme}</h4><br></br>
      <button
        className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`}
        onClick={handleOnClick}
      style={{marginLeft: "20%"}}>
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Posts;