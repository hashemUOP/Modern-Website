import React from "react";
import styles from "../styles/index.module.css";
import {
  IndexImages,
  IndexImagesMobile,
} from "../components/index/IndexImages.jsx";
import { Header, HeaderMobile } from "../components/index/Header.jsx";
import "font-awesome/css/font-awesome.min.css";
import IndexCards from "../components/index/IndexCards.jsx";
import IndexContent1 from "../components/index/IndexContent1.jsx";
import IndexContent2 from "../components/index/IndexContent2.jsx";
import Footer from "../components/index/Footer.jsx";

export default function Home() {
  return (
    <div>
      <div id={styles.desktop}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItemHeader}>
            <Header />
          </div>
          <div className={styles.gridItemImages}>
            <IndexImages />
          </div>
          <div className={styles.gridItemCards}>
            <IndexCards />
          </div>
          <div className={styles.gridItemContent1}>
            <IndexContent1 />
          </div>
          <div className={styles.gridItemContent2}>
            <IndexContent2 />
          </div>
          <div  className={styles.gridItemFooter}>
            <Footer />
          </div>
        </div>
      </div>
      <div id={styles.mobile}>
        <div className={styles.gridContainerMobile}>
          <HeaderMobile />
          <IndexImagesMobile />
          <Footer />
        </div>
      </div>
    </div>
  );
}
