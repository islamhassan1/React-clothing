import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShowPage from "./pages/shop/shop-page.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShowPage} />
    </div>
  );
}

export default App;