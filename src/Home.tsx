import React, { useEffect, useState, useContext } from "react";
import HomePage from "./HomePage.module.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import PublicIcon from "@material-ui/icons/Public";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import PeopleIcon from "@material-ui/icons/People";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CommentIcon from "@material-ui/icons/Comment";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InputBase from "@material-ui/core/InputBase";
import Footer from "./footer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Hidden from "@material-ui/core/Hidden";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Post from "./Post";

const Home = () => {
  const TrendingTweets = [
    { TweetName: "programming", NumberOfTweets: "200k" },
    { TweetName: "devchallenges", NumberOfTweets: "123k" },
    { TweetName: "frontend", NumberOfTweets: "34k" },
    { TweetName: "helsinki", NumberOfTweets: "11k" },
    { TweetName: "100DaysOfCode", NumberOfTweets: "5k" },
    { TweetName: "learntoCode", NumberOfTweets: "1k" }
  ];

  const [OpenPopover, SetOpenPopover] = React.useState(false);
  const [OpenAddImage, SetOpenAddImage] = React.useState(false);
  const ClosePopOver = () => SetOpenPopover(false);
  const OpenPopoverFunc = (event) => SetOpenPopover(event.currentTarget);

  const AddImage = () => {
    SetOpenAddImage(false);
  };

  return (
    <div className={HomePage.background}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <div className={HomePage.AddTweetContainer}>
            <Typography variant="button" gutterBottom>
              Tweet Something
            </Typography>
            <Divider />
            <div className={HomePage.AddTweetContent}>
              <div className={HomePage.AddTweetTextboxContainer}>
                <Avatar variant="rounded">s</Avatar>

                <TextField
                  classes={{ root: HomePage.AddTweetTextbox }}
                  fullWidth={true}
                  label="Whats Happening?"
                />
              </div>
            </div>

            <div className={HomePage.AddTweetBottom}>
              <div>
                <IconButton
                  onClick={() => {
                    SetOpenAddImage(true);
                  }}
                >
                  <ImageIcon />
                </IconButton>

                <Dialog open={OpenAddImage} onClose={() => AddImage()}>
                  <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Let Google help apps determine location. This means
                      sending anonymous location data to Google, even when no
                      apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => AddImage()} color="primary">
                      Disagree
                    </Button>
                    <Button
                      onClick={() => AddImage()}
                      color="primary"
                      autoFocus
                    >
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>

                <Button onClick={OpenPopoverFunc} color="primary">
                  {" "}
                  <PublicIcon /> <p> Everyone can reply </p>
                </Button>
              </div>

              <div>
                <Button variant="contained" color="primary">
                  Tweet
                </Button>
              </div>
            </div>
          </div>

          <Post />

          <Post />
          <Post />

          <Popover
            classes={{ paper: HomePage.AddTweetPopover }}
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
            <Typography variant="h6" gutterBottom>
              Who can reply?
            </Typography>

            <Typography variant="body2" gutterBottom>
              Choose who can reply to this Tweet
            </Typography>
            <Button
              classes={{ root: HomePage.PopoverButtons }}
              fullWidth={true}
            >
              {" "}
              <PublicIcon /> <p> Everyone </p>
            </Button>

            <Button
              classes={{ root: HomePage.PopoverButtons }}
              fullWidth={true}
            >
              {" "}
              <PeopleIcon /> <p> People you follow </p>
            </Button>
          </Popover>
        </Grid>
        <Hidden smDown={true}>
          <Grid item md={4}>
            <Paper
              classes={{ root: HomePage.TrendingTweetsContainer }}
              elevation={0}
            >
              {" "}
              <Typography variant="button" display="block" gutterBottom>
                Trends for you
              </Typography>{" "}
              <Divider />
              {TrendingTweets.map((tweet) => {
                return (
                  <div>
                    <Typography variant="h6" gutterBottom>
                      #{tweet.TweetName}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                      {tweet.NumberOfTweets} Tweets
                    </Typography>
                  </div>
                );
              })}
            </Paper>

            <Paper
              classes={{ root: HomePage.TrendingTweetsContainer }}
              elevation={0}
            >
              {" "}
              <Typography variant="button" display="block" gutterBottom>
                Who to Follow
              </Typography>{" "}
              <Divider />
              <CardHeader
                avatar={
                  <Avatar
                    variant="rounded"
                    src="https://i.pinimg.com/originals/d8/ab/6a/d8ab6a527914cba58261361792653287.jpg"
                    alt="derp"
                  />
                }
                classes={{
                  root: "TextAllignLeft"
                }}
                title={
                  <Typography variant="h5" gutterBottom>
                    Derp
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" gutterBottom>
                    230k Followers
                  </Typography>
                }
                action={
                  <Button variant="contained" color="primary">
                    Tweet
                  </Button>
                }
              />
              <Typography variant="body1" gutterBottom>
                MUNCH MUNCHMUNCHMUNCHMUNCHMUNCH MUNCH MUNCH MUNCH MUNCH MUNCH
              </Typography>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://lh3.googleusercontent.com/proxy/tmZo_sc4Pczuo9Xy6wTC8Z3Iv6rtVKJNwoOmpjH8F5Un3lVOGLo54-EgEbdpZbFWQzpItkjERjP4mbtTRVvKC2zJt_fScfp1OrB-_q0N0Ds"
              />
              <Divider />
              <CardHeader
                avatar={
                  <Avatar
                    variant="rounded"
                    src="https://pm1.narvii.com/6170/6b10b3eafebf6f89c28da751e9748976732f5d24_hq.jpg"
                    alt="derp"
                  />
                }
                classes={{
                  root: "TextAllignLeft"
                }}
                title={
                  <Typography variant="h5" gutterBottom>
                    Derp
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" gutterBottom>
                    230k Followers
                  </Typography>
                }
                action={
                  <Button variant="contained" color="primary">
                    Tweet
                  </Button>
                }
              />
              <Typography variant="body1" gutterBottom>
                MUNCH MUNCHMUNCHMUNCHMUNCHMUNCH MUNCH MUNCH MUNCH MUNCH MUNCH
              </Typography>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://pm1.narvii.com/6170/6b10b3eafebf6f89c28da751e9748976732f5d24_hq.jpg"
              />
            </Paper>
          </Grid>
        </Hidden>
        <Footer />
      </Grid>
    </div>
  );
};

export default Home;
