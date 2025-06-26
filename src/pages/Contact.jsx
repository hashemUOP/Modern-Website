import React from "react";
import styles from "../styles/contact.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import { FaArrowRight } from "react-icons/fa6";
import img from "../assets/img/call-center-agents-avatars-collection-600nw-2303842997-removebg-preview.png";


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
                                    <input type="text" id="name" placeholder="name" name="name" required />

                                    <label for="email">Email*</label>
                                    <input type="email" id="email" placeholder="email" name="email" required />

                                    <label for="message">Your request</label>
                                    <textarea id="message" name="message" class="textArea" placeholder="Your request..." required></textarea>

                                </form>
                                <button className={styles.buttonMessage}><FaArrowRight /> Send Message</button>
                            </div>
                        </div>
                        <div className={styles.gridBox2}>
                            <div className={styles.box2Content}>
                                <img src={img} style={{width:"50%",marginTop:"120px"}} alt="call center avatar"></img>
                                <p style={{fontWeight:"bold",marginTop:"20px"}}>Need Further Assisstance?</p>
                                <p style={{fontSize:"13px",marginLeft:"100px",marginRight:"100px"}}>Our customer support is available Monday to Friday: 11am-7pm</p>
                                <p style={{fontSize:"13px",marginLeft:"100px",marginRight:"100px"}}>We can help answer any questions about our products, shipping or anything else on your mind!</p>
                                <p>
                                    <span style={{fontWeight:"bolder"}}>Call:</span>
                                    <span style={{color:"#F8F8F8",fontSize:"13px"}}> (123)-456-7890</span>
                                </p>
                                <p>
                                    <span style={{fontWeight:"bolder"}}>Visit:</span>
                                    <span style={{color:"#F8F8F8",fontSize:"13px"}}> 1234 Example Street, Anytown, ST 12345                                    </span>
                                </p>
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

export default Contact;
