import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState, useContext } from "react";
import Shared from "./Shared.module.scss";
import Post from "./Post.js";
const Explore = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid spacing={2} container>
      <Grid item xs={3}>
        <div className={Shared.TabContainer}>
          <Paper>
            <Tabs
              classes={{ indicator: Shared.TabUnderline }}
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Top" />
              <Tab label="Lastest" />
              <Tab label="People" />
              <Tab label="Media" />
            </Tabs>
          </Paper>
        </div>
      </Grid>

      <Grid item xs={9}>
        <Paper>
          <InputBase
            fullWidth={true}
            multiline={true}
            value=""
            placeholder="Tweet Your Reply"
            startAdornment={<SearchIcon />}
            endAdornment={
              <Button variant="contained" color="primary">
                Search
              </Button>
            }
          />
        </Paper>
        <Grid spacing={2} container>
          <Grid item xs={12} md={6}>
            <Post PostType="Image" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Post />
          </Grid>
          <Grid item xs={12} md={6}>
            <Post />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Explore;
