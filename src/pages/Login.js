import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import styles from "./Login.module.css";

import FacebookLogin from "react-facebook-login";
import { useState } from "react";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  facebookSignIn,
  facebookSignUp,
  facebookToken,
} from "../redux/reducers/facebookSlice";
import { userDetails } from "../redux/reducers/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);
  // c646927d6ea94965fde505bbae64d1ae
  // 757731156080550

  const responseFacebook = async (response) => {
    dispatch(facebookToken(response?.accessToken));
    dispatch(userDetails(response?.userID));
    if (status !== "success") {
      dispatch(
        facebookSignUp({
          facebook_access_token: response?.accessToken,
          first_name: response?.name,
          last_name: "",
          user_fb_id: response?.userID,
          user_type: "USER",
          email: response?.email,
          password: "",
          timezone: "UTC",
        })
      );
    } else {
      dispatch(
        facebookSignIn({
          facebook_access_token: response?.accessToken,
          user_fb_id: response?.userID,
          user_type: "USER",
          timezone: "UTC",
        })
      );
    }
    navigate("/dashboard");
  };
  const componentCliked = (response) => {
    console.warn(response);
  };

  return (
    <div className={styles.desktop1}>
      <div className={styles.home}>Home</div>
      <div className={styles.aboutUs}>About us</div>
      <b className={styles.chatSimple}>ChatSimple</b>

      <div className={styles.welcomeBackPlease}>
        <FacebookLogin
          appId="6313418292042640"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componentCliked}
          callback={responseFacebook}
        />
        {/* <FacebookLogin
          appId="6313418292042640"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          onClick={componentCliked}
          cssClass={styles.btnFacebook}
          icon="fa-facebook"
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>
              &nbsp; New Login in with Facebook
            </button>
          )}
        /> */}
      </div>
      <b className={styles.artificialIntelligenceDrivinContainer}>
        <p className={styles.resultsForThe}>
          Equip your business with ChatGPT
          <br /> Get your chatbot under 30mins
        </p>
      </b>
      <div className={styles.blog}>Blog</div>
      <div className={styles.pricing}>Pricing</div>

      <div className={styles.rectangleDiv} />
      {/* <img
        className={styles.clipMessageSent1Icon}
        alt=""
        src="/screen.png"
      /> */}

      {loggedIn && <Profile user={user} />}
    </div>
  );
};

export default Login;
