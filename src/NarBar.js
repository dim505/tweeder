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
import appStateContext from "./Shared/appState"

const NavBar = (props) => {
  const appState = useContext(appStateContext);
  const [value, setValue] = React.useState(0);
  const [OpenPopover, SetOpenPopover] = React.useState(false);
  const ClosePopOver = () => SetOpenPopover(false);
  const OpenPopoverFunc = (event) => SetOpenPopover(event.currentTarget);

  const handleChange = (event, newValue) => {
    props.UpdateTab(newValue);
    setValue(newValue);
  };

  return (
    <div className={NavBarStyle.NavBar}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
        <IconButton
            onClick={() => {
              props.UpdateTab(0);
              setValue(0);
            }}
          >
            <TwitterIcon />
          </IconButton>

          <Typography display="inline" variant="h6">
            Tweeder
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="center">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Home" />
              <Tab label="Explore" />
              <Tab label="Bookmarks " />
            </Tabs>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid container spacing={1} justify="flex-end" alignItems="center">
            <Grid item>
              <Avatar
                variant="rounded"
                alt="Remy Sharp"
                src="/broken-image.jpg"
              />
            </Grid>
            <Grid item>
              <Typography display="inline" variant="subtitle2">
                Bob Smith
              </Typography>
              <IconButton onClick={OpenPopoverFunc}>
                <ArrowDropDownIcon />
              </IconButton>


              
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
                  <Button startIcon={<AccountCircleIcon />}>My Profile</Button>
                  <Button startIcon={<GroupIcon />}>Group Chat</Button>
                  <Button startIcon={<SettingsIcon />}>Settings</Button>
                  <Divider variant="middle" />
                  <Button
                    onClick={() => { appState.Auth0Client.logout();}}
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
  );
};

export default NavBar;
