import React from "react";
import styles from "../../styles/login.module.css";
import img2 from "../../assets/img/login/tareq-ajalyakin-72aEtYlS5K0-unsplash.jpg";
import { Link } from "react-router-dom";
function SignupResponsive() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.gridContainerLogin}>
        <div className={styles.gridItem2}>
          <div className={styles.flexContainer}>
            <div className={styles.textDiv}>
              <h1 style={{paddingLeft:"50px",paddingRight:"50px"}}>Welcome to Urban Den!</h1>
              <h6>
                Please enter your details
              </h6>
            </div>
            <div className={styles.formsCol}>
              <form action="signup.htm" method="post">
              <input type="name" className={styles.inputForm} placeholder="Full name"/>
              <input type="email" className={styles.inputForm} placeholder="Email"/>
              <input type="uname" className={styles.inputForm} placeholder="Username"/>
              <input type="password" className={styles.inputForm} placeholder="Password" />
            </form>
            <div className={styles.forgetRow} style={{alignItems:"center"}}>
                <input type="checkbox" name="terms" value="accepted" style={{alignSelf:"center"}} />
                <span>I agree to your <span style={{textUnderlineOffset:"7px",textDecoration: "underline",cursor:"pointer"}}>&nbsp;&nbsp;Terms </span>&nbsp;&nbsp;and <span style={{textUnderlineOffset:"7px",textDecoration: "underline",cursor:"pointer"}}>&nbsp;&nbsp;Privacy Policy</span></span>
                </div>
            </div>
            <br />
            <div className={styles.buttonsColumn}>
              <button className={styles.loginButton}>Create Account</button>
            </div>
            <div className={styles.rowSpan}>
              <span className={styles.span1}>
                Already have an account?
                <Link to={"/login"}>
                    <span className={styles.span2}>&nbsp;&nbsp;Login</span>
                </Link>
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

export default SignupResponsive;
