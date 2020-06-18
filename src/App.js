import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

// Building the Navigation
/*
  BrowserRouter : /#/이 없음, github page 설정이 귀찮음
  HashRouter : /#/이 있음, github page에서 라우팅이 편리해짐
*/

function App() {
  // 여러 태그를 render하려면 다음과 같이
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
        
      </HashRouter>
      <footer></footer>
    </>
  );
}

export default App;