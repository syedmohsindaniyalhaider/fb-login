import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import styles from "./Login.module.css";

import FacebookLogin from "react-facebook-login";
import { useState } from "react";
import Profile from "./Profile";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // c646927d6ea94965fde505bbae64d1ae
  // 757731156080550

  const responseFacebook = (response) => {
    console.log("facebook response", response);
    // if (response.accessToken) {
    //   setLoggedIn(true);
    //   setUser(response);
    // }
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
          // redirectUri="https://c0fc-2407-d000-d-e78f-b0b9-c482-d0e-5299.ngrok-free.app"
          appId="139596095408301"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          // onClick={componentCliked}
          cssClass={styles.btnFacebook}
          icon="fa-facebook"
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>
              &nbsp; Login in with Facebook
            </button>
          )}
        />
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
