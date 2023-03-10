import "./profiles.scss";
import { useContext } from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../../context/authContext";
import Posts from "../../components/posts/Posts";

const Profiles = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="images">
        <img
          src="/src/assets/pexels-ron-lach-9786318.jpg"
          alt=""
          className="cover"
        />
        <img src={currentUser.profilePic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="#">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="#">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="#">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="#">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Nigeria</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>sonio.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profiles;
