import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Grid from "@material-ui/core/Grid";
import ProfileStyle from "./Profile.module.scss";
import React, { useEffect, useState, useContext } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Shared from "./Shared.module.scss";
import Post from "./Post";
import CachedIcon from "@material-ui/icons/Cached";
const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-L7nEHZyplLzTq_blSdSi7ZaScWBd77voWg&usqp=CAU"
        alt="background image"
        width="100%"
        height="200px"
      />

      <Paper classes={{ root: ProfileStyle.BioBackground }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <img
              className={ProfileStyle.ImgProfile}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-L7nEHZyplLzTq_blSdSi7ZaScWBd77voWg&usqp=CAU"
              alt="background image"
              width="150px"
              height="150px"
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <div>
              <Grid container justify="space-between" alignItems="flex-start">
                <Grid item xs={12} md={10}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        gutterBottom
                        display="inline"
                        variant="h6"
                        gutterBottom
                      >
                        Bob Smith {"  "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        gutterBottom
                        display="inline"
                        variant="subtitle1"
                        gutterBottom
                      >
                        <b> 3000 </b> following <b> 12.3k </b> followers
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    startIcon={<PersonAddIcon />}
                    variant="contained"
                    color="primary"
                  >
                    Follow
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="body1" gutterBottom>
                This is my BIO. I like cheese. I like Cows. Nom Nom Nom.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Grid container>
        <Grid item xs={12} md={2}>
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
                <Tab label="Like" />
              </Tabs>
            </Paper>
          </div>
        </Grid>

        <Grid item xs={11} md={10}>
          <Typography variant="body1" gutterBottom>
            <CachedIcon /> Bob Smith retweeted
          </Typography>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
