import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Style from "./FrontPage.module.scss";
import appStateContext from "./Shared/appState";

const FrontPage = () => {
  const appState = useContext(appStateContext);

  const Login = () => {
    appState.Auth0Client.loginWithRedirect();
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        <div className={Style.FrontPageImg}>
          <TwitterIcon />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={Style.FrontPageText}>
          <TwitterIcon />
          <Typography variant="h3" gutterBottom>
            Happening Now
          </Typography>
          <Typography variant="h4" gutterBottom>
            Join Tweeder today
          </Typography>

          <div>
            <Button
              classes={{ root: Style.BtnSignUp }}
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </div>
          <div>
            <Button
              classes={{ root: Style.BtnLogIn }}
              variant="outlined"
              color="primary"
              onClick={Login}
            >
              Log In
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default FrontPage;
