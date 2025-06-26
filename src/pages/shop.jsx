import React from "react";
import styles from "../styles/shop.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import img1 from "../assets/img/shop/wmremove-transformed.jpeg";


function Shop(){
  return (
    <div>
      <div id={styles.desktop}>
        <div className={styles.shopGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemContent}>
            <div className={styles.gridVerBoxes}>
                <div className={styles.vBox1}>
                    <p style={{fontWeight:"bold",fontSize:"120%",textDecorationLine:"underline",textUnderlineOffset:"7px",marginTop:"20px"}}>Shop by</p>
                    <div className={styles.parent}>
                        <div className={styles.div1}>
                            <div className={styles.smallImgBox}>
                                <img src={img1} className={styles.smallImg}></img>
                                <div className={styles.overlayText}>Room</div>
                            </div>
                        </div>
                        <div className={styles.div2}>
                            <div className={styles.smallImgBox}>
                                <img></img>
                            </div>
                        </div>
                        <div className={styles.div3}>
                            <div className={styles.bigImgBox}>
                                <img></img>
                            </div>
                        </div>
                        <div className={styles.div4}>
                            <div className={styles.bigImgBox}>
                                <img></img>
                            </div>
                        </div>
                        <div className={styles.div5}>
                            <div className={styles.smallImgBox}>
                                <img></img>
                            </div>
                        </div>
                        <div className={styles.div6}>
                            <div className={styles.smallImgBox}>
                                <img></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.vBox2}>
                    <div className={styles.parent2}>
                            <div className={styles.div7}>
                                <span style={{fontWeight:"bold",textDecorationLine:"underline",textUnderlineOffset:"7px"}}>Shop by Category</span>
                                <div className={styles.listSpan}>
                                    <span>List1</span>
                                    <span>List2</span>
                                    <span>List3</span>
                                    <span>List4</span>
                                </div>
                            </div>
                        <div className={styles.div8}>8</div>
                    </div>    
                </div>
            </div>
          </div>
          <div className={styles.gridItemFooter}>
              <Footer/>
          </div>
        </div>
      </div>  
      <div id={styles.mobile}>

      </div>
    </div>
  );
}

export default Shop;
