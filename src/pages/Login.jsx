import styles from "../styles/Login.module.css";

import FacebookLogin from "react-facebook-login";
import { useState } from "react";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reducers/authSlice";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // c646927d6ea94965fde505bbae64d1ae
  // 757731156080550

  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loggedIn) {
      if (!loading) {
        if (error !== null) {
          console.log(error);
        } else {
          window.location.replace("/dashboard");
        }
      }
    }
  }, [loading, error]);
  const responseFacebook = (response) => {
    if (response.accessToken) {
      let userToSend = {
        first_name:
          response.name?.indexOf(" ") > -1
            ? response.name?.split(" ")[0]
            : response.name,
        last_name:
          response.name?.indexOf(" ") > -1
            ? response.name?.split(" ")[1]
            : response.name,
        email: response.email,
        picture: response.picture.data.url,
        user_fb_id: response.id,
        facebook_access_token: response.accessToken,
        user_id: response.userID,
        expiresIn: response.expiresIn,
        signedRequest: response.signedRequest,
        password: "123456",
        user_type: "user",
        plan: "free",
        timezone: "UTC",
      };
      // console.log(userToSend);
      // name, email, picture, id,  accessToken, userID, expiresIn, signedRequest
      // successful login
      setLoggedIn(true);
      setUser(response);
      // send data to backend
      dispatch(login(userToSend));
    }
  };
  const componentCliked = (response) => {
    // clicked on component
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
          callback={responseFacebook}
          onClick={componentCliked}
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
