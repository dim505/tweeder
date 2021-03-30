import CommentIcon from "@material-ui/icons/Comment";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InputBase from "@material-ui/core/InputBase";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import PostImage from "./PostImage"
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import Shared from "./Shared.module.scss";

const Post = (props) => {

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
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (6).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (6).JPEG",
              description: "Exiting Video Chat",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (7).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (7).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (8).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (8).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (9).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Vid (9).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (1).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (1).JPEG",
              description: "Starting Voice Call",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (2).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (2).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (3).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (3).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (4).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (4).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (5).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (5).JPEG",
              description: "Other Participant picking up voice call",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (6).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (6).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (7).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM_Voice (7).JPEG",
              description: "Ending voice call",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (1).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (1).JPEG",
              description: "Logging In",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (2).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (2).JPEG",
              description: "Logging In",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (3).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (3).JPEG",
              description: "Logging In",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (4).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (4).JPEG",
              description: "Logging In",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (5).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (5).JPEG",
              description: "Adding a post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (6).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (6).JPEG",
              description: "Attaching an image",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (7).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (7).JPEG",
              description: "Attaching an image",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (8).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (8).JPEG",
              description: "Enabling speech to text",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (9).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (9).JPEG",
              description: "Enabling speech to text",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (10).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (10).JPEG",
              description: "Submitting Post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (11).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (11).JPEG",
              description:
                "View Profile Page - see stats, edit account information",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (12).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (12).JPEG",
              description: "Seeing your own posts",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (13).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (13).JPEG",
              description: "Viewing people who are following you",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (14).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (14).JPEG",
              description: "Viewing the people suggestion page",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (15).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (15).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (16).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (16).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (17).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (17).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (18).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (18).JPEG",
              description: "see who is following you",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (19).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (19).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (20).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (20).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (21).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (21).JPEG",
              description: "Unfollowing someone",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (22).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (22).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (23).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (23).JPEG",
              description: "Following someone",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (24).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (24).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (25).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (25).JPEG",
              description: "Viewing someone elses profile",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (26).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (26).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (27).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (27).JPEG",
              description: "Viewing Account stats",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (28).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (28).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (29).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (29).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (30).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (30).JPEG",
              description: "View Comments ",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (31).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (31).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (32).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (32).JPEG",
              description: "Enabling speech to text on those comments",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (33).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (33).JPEG",
              description: "adding a comment",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (34).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (34).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (35).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (35).JPEG",
              description: "Like a post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (36).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (36).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (37).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (37).JPEG",
              description: "Disable Comments ",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (38).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (38).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (39).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (39).JPEG",
              description: "Disable Sharing ",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (40).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (40).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (41).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (41).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (42).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (42).JPEG",
              description: "Share a post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (43).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (43).JPEG",
              description: "Share a post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (44).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (44).JPEG",
              description: "Share a post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (45).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (45).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (46).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (46).JPEG",
              description: "Edit Post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (47).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (47).JPEG",
              description: "Update Post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (48).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (48).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (49).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (49).JPEG",
              description: "Delete Post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (50).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (50).JPEG",
              description: "Delete Post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (51).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (51).JPEG",
              description: "Delete Post",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (52).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (52).JPEG",
              description: "Edit Account Information",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (53).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (53).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (54).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (54).JPEG",
              description: "Update Banner photo",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (55).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (55).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (56).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (56).JPEG",
              description: "Update Profile photo",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (57).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (57).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (58).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (58).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (59).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (59).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (60).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (60).JPEG",
              description: "Clicking on a conversation",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (61).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (61).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (62).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (62).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (63).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (63).JPEG",
              description: "Sending a chat",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (64).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (64).JPEG",
              description: "Adding an attachment",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (65).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (65).JPEG",
              description: "Adding an attachment",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (66).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (66).JPEG",
              description: "Adding an attachment",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (67).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (67).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (68).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (68).JPEG",
              description: "Compose a new message",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (69).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (69).JPEG",
              description: "selecting the person",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (70).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (70).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (71).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (71).JPEG",
              description: "Search key words in posts",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (72).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (72).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (73).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (73).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (74).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (74).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (75).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (75).JPEG",
              description: "You can also search people",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (76).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (76).JPEG",
              description: "",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (77).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (77).JPEG",
              description: "Get notifications of people following you",
              ProjectGithubLink: "https://github.com/dim505/SocialMedia",
              ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
            },
            {
              original:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (78).JPEG",
              thumbnail:
                "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (78).JPEG",
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
          INEEEEEEEEEEEEI NEIN NEIN NEIN NEIN NEIN NEIN NEIN NEIN
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
