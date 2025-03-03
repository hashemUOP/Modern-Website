import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "../../styles/index.module.css";
import {Link} from "react-router-dom";
function redirect(ref) {
  window.location.href = ref;
}

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className={styles.gridItemFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumns}>
          <p className={styles.header}>Urban D&eacute;n</p>
          <p id="footer-style">
            Style That Speaks, Comfort That Lasts.
          </p>
          <div className={styles.footerSocial}>
            <a href="https://facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://x.com">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className={styles.footerColumns}>
          <p className={styles.header}>Products</p>
          <p onClick={() => redirect("#")}>Overview</p>
          <p onClick={() => redirect("#")}>Customer stories</p>
        </div>
        <div className={styles.footerColumns}>
          <p className={styles.header}>Resources</p>
          <p onClick={() => redirect("#")}>Blog</p>
          <p onClick={() => redirect("#")}>What's new</p>
          <p onClick={() => redirect("#")}>Help Center</p>
        </div>
        <div className={styles.footerColumns}>
          <p className={styles.header}>Services</p>
          <Link to="/login" style={{ all: "unset" }}>
            <p>Log In and Sign Up</p>
          </Link>
          <p onClick={() => redirect("#")}>payment</p>
        </div>
        <div className={styles.footerColumns}>
          <p className={styles.header}>Company</p>
          <p onClick={() => redirect("#")}>About us</p>
          <p onClick={() => redirect("#")}>Contact support</p>
        </div>
      </div>
      <hr />
      <div style={{display:"flex",justifyContent:"center"}}>
        <p id="setYear" className={styles.footerSpan}>
          Copyright &copy; {year} | Urban D&eacute;n. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
