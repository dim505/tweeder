import React, { useEffect, useState, useContext } from "react";
import CommentIcon from "@material-ui/icons/Comment";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InputBase from "@material-ui/core/InputBase";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import PostImage from "./PostImage";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import Shared from "./Shared.module.scss";
import Collapse from "@material-ui/core/Collapse";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";

const Post = (props) => {
  const [OpenComments, SetOpenComments] = useState(false);

  const RenderPost = () => {
    if (props.PostType === "Image") {
      return (
        <PostImage
          PostMessage="I like Cheese, Cows and Milk"
          Images={[
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (1).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (1).JPEG",
              description: "Starting Video Call",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (2).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (2).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (3).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (3).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (4).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (4).JPEG",
              description: "Other Participant is joining",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (5).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (5).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            }
          ]}
        />
      );
    } else {
      return (
        <Typography
          classes={{
            root: "TextAllignLeft"
          }}
          variant="body2"
          component="p"
        >
          INEEEEEEE
        </Typography>
      );
    }
  };

  return (
    <Paper classes={{ root: Shared.PostContainer }} elevation={0}>
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
        title="derp"
        subheader={"August 20, 2020 at 20:43 "}
      />{" "}
      <CardContent>
        {" "}
        {RenderPost()}
        <Typography
          align="right"
          variant="caption"
          display="block"
          gutterBottom
        >
          449 Comments 59k Retweets 234 Saved
        </Typography>
        <Divider />
        <div className={Shared.PostButtonsContainer}>
          <Hidden lgUp={true}>
            <Tooltip title="Comments">
              <IconButton
                onClick={() => {
                  SetOpenComments(!OpenComments);
                }}
              >
                <CommentIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Retweet">
              <IconButton classes={{ root: Shared.RetweetBtn }}>
                <AutorenewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Liked">
              <IconButton classes={{ root: Shared.LikedBtn }}>
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Saved">
              <IconButton classes={{ root: Shared.SavedBtn }}>
                <BookmarkBorderIcon />
              </IconButton>
            </Tooltip>
          </Hidden>

          <Hidden mdDown={true}>
            {" "}
            <Button
              onClick={() => {
                SetOpenComments(!OpenComments);
              }}
            >
              {" "}
              <CommentIcon /> <p> Comment</p>
            </Button>
            <Button classes={{ root: Shared.RetweetBtn }}>
              {" "}
              <AutorenewIcon /> <p> Retweeted</p>
            </Button>
            <Button classes={{ root: Shared.LikedBtn }}>
              {" "}
              <FavoriteBorderIcon /> <p> Liked</p>
            </Button>
            <Button classes={{ root: Shared.SavedBtn }}>
              {" "}
              <BookmarkBorderIcon /> <p> Saved</p>
            </Button>
          </Hidden>
        </div>
        <Divider />
      </CardContent>
      <Collapse in={OpenComments}>
        <CardHeader
          avatar={<Avatar variant="rounded" alt="" src=""></Avatar>}
          classes={{
            root: "TextAllignLeft"
          }}
          title={
            <>
              <div className={Shared.DisplayCommentTextBox}>
                <div>
                  <Typography display="inline" variant="subtitle1" gutterBottom>
                    Bob Smithty {"        "}
                  </Typography>

                  <Typography display="inline" variant="caption" gutterBottom>
                    August 20, 2020 at 20:43
                  </Typography>
                </div>
                <Typography variant="body2" gutterBottom>
                  This is a test comment. TEST TESTTESTTESTTESTTEST
                  TESTTESTTESTTESTTESTTESTTEST
                </Typography>
              </div>

              <Button size="small" classes={{ root: Shared.LikedBtn }}>
                {" "}
                <FavoriteBorderIcon /> Liked
              </Button>

              <Typography display="inline" variant="caption" gutterBottom>
                12.3 Likes
              </Typography>
            </>
          }
        />
        <CardHeader
          avatar={<Avatar variant="rounded" alt="" src=""></Avatar>}
          classes={{
            root: "TextAllignLeft"
          }}
          title={
            <div>
              <InputBase
                fullWidth={true}
                multiline={true}
                value=""
                classes={{ root: Shared.AddCommentTextBox }}
                placeholder="Tweet Your Reply"
                endAdornment={
                  <IconButton>
                    <ImageIcon />
                  </IconButton>
                }
              />
            </div>
          }
        />
      </Collapse>
    </Paper>
  );
};

export default Post;
