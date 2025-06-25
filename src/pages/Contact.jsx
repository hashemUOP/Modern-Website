import React from "react";
import styles from "../styles/about-us.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import { FaArrowRight } from "react-icons/fa6";

function Contact(){
  return (
    <div>
      <div id={styles.desktop}>
        <div className={styles.contactGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div> 
          <div className={styles.gridItemContent}>
              <div className={styles.contactTextDiv}>
                    <p>Contact</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
              </div>
              <div className={styles.gridTwoBoxes}>
                        <div className={styles.gridBox1}>
                            <div className={styles.gridBox1Content}>
                                <p style={{fontWeight:"bold",fontSize:"120%"}}>Get in Touch</p>
                                <p style={{fontSize:"120%"}}>Our friendly team would love to hear from you</p>
                                <form>

                                </form>
                                <form>

                                </form>
                                <textarea>

                                </textarea>
                                <button className={styles.buttonMessage}><FaArrowRight /> Send Message</button>
                            </div>
                        </div>
                        <div className={styles.gridBox2}>
                            <p>Alsughaier</p>
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

export default Contact;
