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
                                <p style={{fontSize:"90%"}}>Our friendly team would love to hear from you</p>
                                <form className={styles.form} action="/submit" method="POST">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required />

                                    <label for="email">Email*</label>
                                    <input type="email" id="email" name="email" required />

                                    <label for="message">Your request</label>
                                    <textarea id="message" name="message" class="textArea" placeholder="Your request..." required></textarea>

                                </form>
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
