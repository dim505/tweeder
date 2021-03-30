import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Fade from "react-reveal/Fade";
import Typography from "@material-ui/core/Typography";

const PostImage = (props) => {
  return (
    <div>
      <Fade delay={1000}>
        <Typography gutterBottom variant="body2" component="p">
          {props.PostMessage}
        </Typography>

        <ImageGallery
          showPlayButton={false}
          lazyLoad={true}
          items={props.Images}
        />
      </Fade>
    </div>
  );
};

export default PostImage;
