import FrontPage from "./FrontPage";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { useEffect, useState, useContext } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import appStateContext from "./Shared/appState";
import "./Global.scss";
import Home from "./Home";
import NavBar from "./NarBar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Fade from "react-reveal/Fade";
import HomePage from "./HomePage.module.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
      
      const isAuthenticated = await appState.Auth0Client.isAuthenticated();
      SetAuthenication(isAuthenticated);
      console.log(Authenicated)
    
    }, 1000)
    

    try {
     await  appState.Auth0Client.getTokenSilently()
    } catch (error) {

          console.log(error)
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
          <NavBar UpdateTab={UpdateTab} />
          {TabValue === 0 ? (
            <Fade>
              <Home />
            </Fade>
          ) : (
            <div />
          )}

          {TabValue === 1 ? (
            <Fade>
              <div className={HomePage.background}>
                <PerfectScrollbar className={HomePage.PostBody}>
                  <Grid container>
                    <Grid item xs={3}>
                      <Paper>
                        <Tabs
                          fullWidth={true}
                          orientation="vertical"
                          variant="scrollable"
                          value={value}
                          onChange={handleChange}
                          indicatorColor="primary"
                          textColor="primary"
                          
                        >
                          <Tab label="Top" />
                          <Tab label="Lastest" />
                          <Tab label="People" />
                          <Tab label="Media" />
                        </Tabs>
                      </Paper>
                    </Grid>
                  </Grid>
                </PerfectScrollbar>
              </div>
            </Fade>
          ) : (
            <div />
          )}
        </>


)
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
