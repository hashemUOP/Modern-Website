import React from "react";
import styles from "../styles/findstore.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import { FaAngleRight } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

function FindStore(){
  const navigate = useNavigate();

  return (
    <div>
      <div id={styles.desktop}>
        <div className={styles.collectionsGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemPath}>
            <span
              id={styles.span1}
              onClick={() => navigate("/")}
            >
              Home
          </span>
            <span id={styles.span2}><FaAngleRight/></span>
            <span id={styles.span3}>Find Store</span>
          </div>
          <div className={styles.gridItemContent}>
              <div className={styles.contentBox1}>
                <div className={styles.box1Menu}>
                  <h1 style={{marginTop:"30px"}}>Find Us</h1>
                  <p style={{marginTop:"10px",fontSize:"0.8dvw"}}>Discover timeless comfort and modern elegance at our furniture store, where quality craftsmanship meets stylish design. Find the perfect pieces to transform your space today.</p>
                </div>
              </div>
              <div className={styles.contentBox2}>
                <div className={styles.box2Content}>
                  <div className={styles.box2Left}>
                    <div className={styles.boxL1}>
                      <FaLocationDot style={{fontSize:"3dvw"}}/>
                      <p style={{fontWeight:"900",fontSize:"1.25dvw"}}>Address :</p>
                      <p style={{paddingLeft:"50px",paddingRight:"50px",fontSize:"1dvw"}}>Airport Rd.Amman Jordan</p>
                    </div>
                    <div className={styles.boxL2}>
                      <AiOutlineMail style={{fontSize:"3dvw"}}/>
                      <p style={{fontWeight:"900",fontSize:"1.25dvw"}}>Email :</p>
                      <p style={{paddingLeft:"50px",paddingRight:"50px",fontSize:"1dvw"}}>urbanden@email.com</p>
                    </div>
                    <div className={styles.boxL3}>
                      <IoCall style={{fontSize:"3dvw"}}/>
                      <p style={{fontWeight:"900",fontSize:"1.25dvw"}}>Call us:</p>
                      <p style={{paddingLeft:"50px",paddingRight:"50px",fontSize:"1dvw"}}>1(234)567-891</p>
                    </div>
                    <div className={styles.boxL4}>
                      <p style={{fontWeight:"900",fontSize:"1dvw",marginTop:"100px"}}>Our Social media accounts:</p>
                      <div style={{display:"flex",gap:"10px",marginBottom:"40px"}}>
                        <FaFacebook style={{fontSize:"1.75dvw",cursor:"pointer"}}/>
                        <FaInstagram style={{fontSize:"1.75dvw",cursor:"pointer"}}/>
                        <FaPinterest style={{fontSize:"1.75dvw",cursor:"pointer"}}/>
                      </div>
                    </div>
                  </div>
                  <div className={styles.box2Right}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.6413527970776!2d35.89561997508202!3d31.828967631831684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca703d4a38371%3A0x2c67dcdcb9b4bf64!2sAirport%20Rd.%2C%20Amman!5e1!3m2!1sen!2sjo!4v1751474551628!5m2!1sen!2sjo"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map - Airport Road Amman"
                    />
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

export default FindStore;
