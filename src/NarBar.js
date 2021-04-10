import React, { useEffect, useState, useContext } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "@material-ui/core/Avatar";
import NavBarStyle from "./NavBar.module.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Divider from "@material-ui/core/Divider";
import appStateContext from "./Shared/appState";
import Hidden from "@material-ui/core/Hidden";

const NavBar = (props) => {
  const appState = useContext(appStateContext);
  const [OpenPopover, SetOpenPopover] = React.useState(false);
  const ClosePopOver = () => SetOpenPopover(false);
  const OpenPopoverFunc = (event) => SetOpenPopover(event.currentTarget);

  const handleChange = (event, newValue) => {
    props.UpdateTab(newValue);
  };

  return (
    <>
      <div className={NavBarStyle.NavBar}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <IconButton
              onClick={() => {
                props.UpdateTab(0);
              }}
            >
              <TwitterIcon />
            </IconButton>
            <Hidden smDown={true}>
              <Typography display="inline" variant="h6">
                Tweeder
              </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={6}>
            <Grid container justify="center">
              <Hidden smDown={true}>
                <Tabs
                  value={props.TabValue}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Home" />
                  <Tab label="Explore" />
                  <Tab label="Bookmarks " />
                </Tabs>
              </Hidden>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Grid container spacing={5} justify="flex-end" alignItems="center">
              <Grid item>
                <IconButton onClick={OpenPopoverFunc}>
                  <Avatar
                    variant="rounded"
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                  />
                </IconButton>

                <Hidden smDown={true}>
                  <Typography
                    classes={{ root: NavBarStyle.ProfileNameDiv }}
                    display="inline"
                    variant="subtitle2"
                  >
                    Bob Smith{" "}
                  </Typography>
                </Hidden>

                <Popover
                  open={Boolean(OpenPopover)}
                  anchorEl={OpenPopover}
                  onClose={ClosePopOver}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                >
                  <ButtonGroup
                    classes={{ grouped: NavBarStyle.ProfileMenu }}
                    orientation="vertical"
                  >
                    <Button
                      onClick={() => props.UpdateTab(3)}
                      startIcon={<AccountCircleIcon />}
                    >
                      My Profile
                    </Button>
                    <Button disabled startIcon={<GroupIcon />}>
                      Group Chat
                    </Button>
                    <Button disabled startIcon={<SettingsIcon />}>
                      Settings
                    </Button>
                    <Divider variant="middle" />
                    <Button
                      onClick={() => {
                        appState.Auth0Client.logout();
                      }}
                      classes={{ grouped: NavBarStyle.Logout }}
                      startIcon={<ExitToAppIcon />}
                    >
                      Logout
                    </Button>
                  </ButtonGroup>
                </Popover>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NavBar;
