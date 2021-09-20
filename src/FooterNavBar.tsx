import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Hidden from "@material-ui/core/Hidden";
import NavBarStyle from "./NavBar.module.scss";
const FooterNavBar = (props) => {
  return (
    <Hidden mdUp={true}>
      <div className={NavBarStyle.BottomNavBar}>
        <BottomNavigation
          value={props.TabValue}
          onChange={(event, newValue) => {
            props.UpdateTab(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          <BottomNavigationAction label="Bookmarks" icon={<BookmarkIcon />} />
        </BottomNavigation>
      </div>
    </Hidden>
  );
};

export default FooterNavBar;
