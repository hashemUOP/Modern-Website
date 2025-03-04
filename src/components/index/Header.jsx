import React, { useState,useEffect } from "react";
import cartIcon from '../../assets/img/basket (3).png';
import arrowDown from '../../assets/icons/Iconsax/Iconsax/Svg/Category/Arrow/vuesax/outline/arrow-down-1.svg';
import Drawer from "./Drawer.jsx";
import styles from "../../styles/index.module.css";
import { Link} from "react-router-dom";


function Marquee(){
    return (
        <div className={styles.marqueeText}>
            <span className={styles.slash}>/</span>{" "}
            <span className={styles.lightWords}> 15% off - Use code&nbsp;&nbsp;</span>{" "}
            <span className={styles.boldWords}>Comfy25</span>
            <span className={styles.slash}>/</span>
            <span className={styles.lightWords}>Dining Tables at</span>{" "}
            <span className={styles.boldWords}>&nbsp;&nbsp; 199$</span>
            <span className={styles.slash}>/</span>{" "}
            <span className={styles.boldWords}>Limited Time Offer:&nbsp;&nbsp;</span>
            <span className={styles.lightWords}>throw pillows with sofas purchases</span>
            <span className={styles.slash}>/</span>
            <span className={styles.lightWords}>Free shipping on orders above&nbsp;&nbsp;</span>
            <span className={styles.boldWords}>200$</span>
            <span className={styles.slash}>/</span>
        </div>
    );
}

function Header(){
    return (
        <div style={{height:"100%"}}>
            <div className={styles.flexHeaderItem1}>
                <div className={styles.headerRow1}>
                    <div className={styles.wordPlusArrow}>
                        <div className={styles.menu}>
                            <Link to="/" style={{all:"unset"}}>
                                <span>Home</span>
                            </Link>
                            <img src={arrowDown} width="15px"/>
                            <ul className={styles.dropDown}>
                                <li>About us</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.wordPlusArrow}>
                        <div className={styles.menu}>
                           <span>New Arrivals</span>
                            <img src={arrowDown} height="15px"/>
                            <ul className={styles.dropDown}>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.wordPlusArrow}>
                        <div className={styles.menu}>
                            <Link to="/collections" style={{all:"unset"}}>
                                <span>Collections</span>
                            </Link>    
                            <img src={arrowDown} height="15px"/>
                            <ul className={styles.dropDown}>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul> 
                        </div>
                    </div>
                    <div className={styles.wordPlusArrow}>
                        <div className={styles.menu}>
                           <span>Resources</span>
                            <img src={arrowDown} height="15px"/>
                            <ul className={styles.dropDown}>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <Link to="/" className={styles.headerRow2}>
                    <span>Urban D&eacute;n</span>
                </Link>
                <div className={styles.headerRow3}>
                    <i className="fa-solid fa-magnifying-glass" style={{ marginRight: "10%" }}></i>
                </div>
                <div className={styles.headerRow4}>
                    <Link to={"/login"}>
                        <button className={styles.loginButton}>Login</button>    
                    </Link>
                    <a href="#">
                        <button className={styles.signupButton}>Sign up</button>
                    </a>
                </div>
            </div>
            <div className={styles.flexHeaderItem2}>
                <div className={styles.headerItem2Row1}>
                    <span className={styles.instagram}><a href="https://instagram.com">Instagram</a></span>
                    <span className={styles.facebook}><a href="https://facebook.com">Facebook</a></span>
                    <span className={styles.pintrest}><a href="https://pinterest.com">Pinterest</a></span>
                </div>
                <div className={styles.headerItem2Row2}>
                    <span><a href="#">Deal</a></span>
                    <span>.</span>
                    <span><a href="#">Find Store</a></span>
                    <span>.</span>
                    <span><a href="#">Upcoming Events</a></span>
                    <span>.</span>
                    <span><a href="#">FAQs</a></span>
                </div>
                <div className={styles.headerItem2Row3}>
                    <button className={styles.cartButton} >
                        <img src={cartIcon} height="15px" />&nbsp;0 items in cart
                    </button>
                </div>
            </div>
            <div className={styles.flexHeaderItem3}>
                <Marquee/>   
            </div>
        </div>
    );
}

function HeaderMobile() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className={styles.gridItemHeader}>
      <div className={styles.flexHeaderItem3}>
        <Marquee/>
      </div>
      <div
        style={{
          display: "flex",
          height: "60%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ marginLeft:"5%" }}>
          <i
            className="fa-solid fa-bars"
            onClick={() => setShowDrawer(true)}
            style={{ cursor:"pointer" }}
          ></i>
          <i className="fa-solid fa-magnifying-glass" style={{ marginLeft: "20px" }}></i>
        </div>
        <span style={{ fontWeight: "bold" }}>Urban D&eacute;n</span>  
        <div style={{ marginRight: "5%", justifyContent: "space-between" }}>
          <i className="fa-regular fa-user" style={{ marginRight: "20px" }}></i>
          <i className="fa-solid fa-bag-shopping"></i>  
        </div>
      </div>
      {showDrawer && <Drawer onClose={() => setShowDrawer(false)} />}
    </div>
  );
}

export { Header, HeaderMobile };
