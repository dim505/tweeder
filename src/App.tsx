import FrontPage from "./FrontPage";
import React, { useEffect, useState, useContext } from "react";
import appStateContext from "./Shared/appState";
import "./Global.scss";
import Home from "./Home";
import NavBar from "./NarBar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Fade from "react-reveal/Fade";
import Profile from "./Profile";
import Explore from "./Explore";
import Bookmarks from "./Bookmarks";
import FooterNavBar from "./FooterNavBar";
//https://www.ronaldjamesgroup.com/blog/reason-behind-using-refs-instead-of-id-in-react-js
//https://www.javascriptstuff.com/use-refs-not-ids/
//https://underbelly.is/writing-about/using-react-refs-to-manipulate-the-dom
const App = () => {
  const appState = useContext(appStateContext);
  const [TabValue, SetTabValue] = useState(0);
  const [Authenicated, SetAuthenication] = useState(false);
  const [value, setValue] = React.useState(0);

  const UpdateTab = (newValue) => {
    SetTabValue(newValue);
  };
  useEffect(async () => {
    await appState.GetAuth0Client();

    setTimeout(async () => {
      if (window.location.search.includes("code=")) {
        SetAuthenication(true);
      } else {
        const isAuthenticated = await appState.Auth0Client.isAuthenticated();
        SetAuthenication(isAuthenticated);
      }
    }, 1000);

    try {
      await appState.Auth0Client.getTokenSilently();
    } catch (error) {
      console.log(error);
      /* if (error.error !== 'login_required') {
                throw error
          } */
    }
  }, []);
  {
    /*  */
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isAuthenticated = () => {
    if (Authenicated) {
      return (
        <>
          <NavBar TabValue={TabValue} UpdateTab={UpdateTab} />
          <div className="PostBody">
            {TabValue === 0 ? (
              <Fade>
                <Home />
              </Fade>
            ) : (
              <div />
            )}

            {TabValue === 1 ? (
              <Fade>
                <Explore />
              </Fade>
            ) : (
              <div />
            )}

            {TabValue === 2 ? (
              <Fade>
                <Bookmarks />
              </Fade>
            ) : (
              <div />
            )}

            {TabValue === 3 ? (
              <Fade>
                <Profile />
              </Fade>
            ) : (
              <div />
            )}

            <FooterNavBar TabValue={TabValue} UpdateTab={UpdateTab} />
          </div>
        </>
      );
    } else {
      return (
        <Fade>
          <FrontPage />
        </Fade>
      );
    }
  };

  return <>{isAuthenticated()}</>;
};

export default App;
