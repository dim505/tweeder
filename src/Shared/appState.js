import { observable, action, computed } from "mobx";
import { ApiCall } from "./ApiCall";
import { createContext } from "react";

import createAuth0Client from "@auth0/auth0-spa-js";

createAuth0Client({
  domain: "dev-5wttvoce.auth0.com",
  client_id: "a47WBv2GDMgTgLLpbRkDQK31mkPVcnGh",
  //Redirect URL when authenication suceeds
  redirect_uri:
    /*`${process.env.REACT_APP_FrontEndSiteURL}`*/ "https://i7xnh.csb.app",
  audience: "https://TweederClone.com"
}).then((auth0) => {
  window.Auth0Client = auth0;
});

class AppState {
  @observable Auth0Client = "";

  @action GetAuth0Client = () => {
    this.Auth0Client = window.Auth0Client;
  };
}

const appStateContext = createContext(new AppState());
export default appStateContext;
