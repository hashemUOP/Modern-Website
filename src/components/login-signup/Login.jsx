import React from "react";
import styles from "../../styles/login.module.css";
import img from "../../assets/img/login/abstract-isometric-logo-design-free-logo-removebg-preview.png"
import img2 from "../../assets/img/login/tareq-ajalyakin-72aEtYlS5K0-unsplash.jpg";
function LoginResponsive() {
  return (
    <div className={styles.gridContainerLogin}>
      <div className={styles.gridItem1}>
        <img 
          src={img2} 
          className={styles.gridItem1Img} 
          alt="background" 
        />
      </div>
      <div className={styles.gridItem2}>
        <div className={styles.flexContainer}>
          <img 
            src={img}
            style={{ width: "auto", height: "100px" }} 
            alt="logo" 
          />
          <div className={styles.textDiv}>
            <h1>Welcome back!</h1>
            <h5 className={styles.subtitle}>
              Please enter your details
            </h5>
          </div>
          <form action="login.htm" method="post">
            <input type="email" className={styles.inputForm} placeholder="Email" />
            <input type="password" className={styles.inputForm} placeholder="Password" />
          </form>
          <div className={styles.forgetRow}>
            <label className={styles.rememberText}>
              <input type="checkbox" name="terms" value="accepted" />
              Remember password
            </label>
            <span className={styles.forgetText}>Forgot password?</span>
          </div>
          <br />
          <div className={styles.buttonsColumn}>
            <button className={styles.loginButton}>Log In</button>
            <button className={styles.googleButton}>
              <div>
                <i className="fa-brands fa-google"></i>
                &nbsp;&nbsp;Login with Google
              </div>
            </button>
          </div>
          <div className={styles.rowSpan}>
            <span className={styles.span1}>
              Don't have an account?
              <span className={styles.span2}>&nbsp;Sign up</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginResponsive;
