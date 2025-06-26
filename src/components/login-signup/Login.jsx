import React from "react";
import styles from "../../styles/login.module.css";
import img2 from "../../assets/img/login/tareq-ajalyakin-72aEtYlS5K0-unsplash.jpg";
function LoginResponsive() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.gridContainerLogin}>
        <div className={styles.gridItem2}>
          <div className={styles.flexContainer}>
            <div className={styles.textDiv}>
              <h1>Welcome back!</h1>
              <h6>
                Please enter your details
              </h6>
            </div>
            <div className={styles.formsCol}>
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
        <div className={styles.gridItem1}>
          <img 
            src={img2} 
            className={styles.gridItem1Img} 
            alt="background" 
          />
        </div>
      </div>
      </div>
  );
}

export default LoginResponsive;
