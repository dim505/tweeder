import CommentIcon from "@material-ui/icons/Comment";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InputBase from "@material-ui/core/InputBase";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";

import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import Shared from "./Shared.module.scss";

const Post = () => {
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
        <Typography
          classes={{
            root: "TextAllignLeft"
          }}
          variant="body2"
          component="p"
        >
          Nen dsanoifnoiegiwegniwegnoiwefoief
        </Typography>
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
          {" "}
          <Button>
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
        </div>
        <Divider />
      </CardContent>
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
    </Paper>
  );
};

export default Post;
