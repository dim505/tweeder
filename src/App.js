import React, { useEffect, useState, useContext } from "react";
import FrontPage from "./FrontPage";
import appStateContext from "./Shared/appState";
import "./Global.scss";
import HomePage from "./HomePage.module.scss";
import NavBar from "./NarBar";
//https://www.ronaldjamesgroup.com/blog/reason-behind-using-refs-instead-of-id-in-react-js
//https://www.javascriptstuff.com/use-refs-not-ids/
//https://underbelly.is/writing-about/using-react-refs-to-manipulate-the-dom
const App = () => {
  const appState = useContext(appStateContext);

  useEffect(() => {
    appState.GetAuth0Client();
  }, []);

  {
    /**     <div className={HomePage.background}>
      <NavBar />
    </div>*/
  }

  return <FrontPage />;
};

export default App;
