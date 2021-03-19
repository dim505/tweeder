import Typography from "@material-ui/core/Typography";
import HomePageStyle from "./HomePage.module.scss";
const Footer = () => {
  return (
    <Typography
      classes={{ root: HomePageStyle.FooterStyle }}
      display="block"
      align="center"
      variant="body1"
      gutterBottom
    >
      created by Dim505 - devChallenges.io
    </Typography>
  );
};

export default Footer;
