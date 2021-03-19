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

const NavBar = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    props.UpdateTab(newValue);
    setValue(newValue);
  };

  return (
    <div className={NavBarStyle.NavBar}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <IconButton>
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
              <IconButton>
                <ArrowDropDownIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
