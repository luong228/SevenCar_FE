import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import classes from "./SignUp.module.css";
import React from "react";
import SignupForm from "../../components/Authentication/Signup/SignupForm";


function SignUp() {
  return (
    <>
      <div style={{ position: "absolute" }}>
        <div className={classes.rectangle} />
        <div className={classes.triangle} />
      </div>
      <div className={classes.container}>
        <div className={classes.introduction}>
          <h1>
            CÔNG TY CỔ PHẦN <b style={{ color: "yellow" }}>SEVEN</b>
          </h1>
          <p>Nhà phân phối xe hơi cao cấp uy tín hàng đầu Việt Nam</p>
          <div className={classes.contact}>
            <div className={classes["contact-icon"]}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className={classes["contact-info"]}>
              <p>Hotline</p>
              <p>0934021021</p>
            </div>
          </div>
        </div>
        <div className={classes["signup-form"]}>
          <SignupForm />
        </div>
      </div>
    </>
  );
}

export default SignUp;