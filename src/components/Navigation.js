import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      {/* 이 경우 html이기 때문에 새로고침을 해버린다. */}
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      {/* 단, Link를 사용하려면 component는 HashRouter 속에 있어야 한다. */}
      <Link to="/">Home</Link>
      {/* <Link to={{
        pathname: "/about",
        state: {
          fromNavigation: true
        }
      }}>About</Link> */}
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;