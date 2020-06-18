import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";

// Building the Router
/*
  Route component에서 중요한 props는 path와 exact, component.
    - path : 라우팅 경로
    - exact : 경로가 정확해야만(True) render
    - component : render page
*/

function App() {
  return <HashRouter>
    {/* 이 경우 /about이라 하면 /도 render, /about도 render */}
    {/* <Route path="/" component={Home} />
    <Route path="/about" component={About} /> */}
    {/* 이 경우 /about이면 /about만! */}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
    
  </HashRouter>;
}

export default App;