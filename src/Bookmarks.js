import React, { useEffect, useState, useContext } from "react";
import Post from "./Post";
import Grid from "@material-ui/core/Grid";
import Shared from "./Shared.module.scss";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Bookmarks = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2}>
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
              <Tab label="Tweets" />
              <Tab label="Tweets & replies" />
              <Tab label="Media" />
              <Tab label="Likes" />
            </Tabs>
          </Paper>
        </div>
      </Grid>

      <Grid item xs={9}>
        <Post />
      </Grid>
    </Grid>
  );
};

export default Bookmarks;
