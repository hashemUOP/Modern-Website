import React from "react";
import cartIcon from '../../assets/img/basket (3).png';
import arrowDown from '../../assets/icons/Iconsax/Iconsax/Svg/Category/Arrow/vuesax/outline/arrow-down-1.svg';
import Drawer from "./Drawer.jsx";

function redirect(ref){
    window.location.href= ref;
}

function Marquee(){
    return (
        <div className="marquee-text">
            <span className="slash">/</span> <span className="light-words"> 15% off - Use code&nbsp;&nbsp;</span> <span className="bold-words">Comfy25</span>
            <span className="slash">/</span><span className="light-words">Dining Tables at</span> <span className="bold-words">&nbsp;&nbsp; 199$</span>
            <span className="slash">/</span> <span className="bold-words">Limited Time Offer:&nbsp;&nbsp;</span><span className="light-words">throw pillows with sofas purchases</span>
            <span className="slash">/</span><span className="light-words">Free shipping on orders above&nbsp;&nbsp;</span><span className="bold-words">200$</span>
            <span className="slash">/</span>
        </div>
    );
}
function Header(){
    return (
    <div className="grid-container">
        <div className="grid-item-header">
            <div className="flex-header-item1">
                <div className="header-row1">
                    <div className="word-plus-arrow">
                        <div className="menu">
                            <span>Home</span>
                            <img src={arrowDown} width="15px"/>
                            <ul className="dropdown">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="word-plus-arrow">
                        <div className="menu">
                           <span>New Arrivals</span>
                            <img src={arrowDown} height="15px"/>
                            <ul className="dropdown">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="word-plus-arrow">
                        <div className="menu">
                            <span>Collections</span>
                            <img src={arrowDown} height="15px"/>
                            <ul className="dropdown">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                </ul> 
                        </div>
                    </div>
                    <div className="word-plus-arrow">
                        <div className="menu">
                           <span>Resources</span>
                            <img src={arrowDown} height="15px"/>
                            <ul className="dropdown">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="header-row2" onClick={() => redirect('../html/index.htm')}>
                    <span>Urban D&eacute;n</span>
                </div>
                <div className="header-row3">
                    <i className="fa-solid fa-magnifying-glass" style={{marginRight: "10%"}}></i>
                </div>
                <div className="header-row4">
                    <a href="../html/login.htm">
                        <button className="login-button">Login</button>    
                    </a>
                    <a href="#">
                        <button className="signup-button">Sign up</button>
                    </a>
                </div>
            </div>
            <div className="flex-header-item2">
                <div className="header-item2-row1">
                    <span className="instagram"><a href="https://instagram.com">Instagram</a></span>
                    <span className="facebook"><a href="https://facebook.com" >Facebook</a></span>
                    <span className="pintrest"><a href="https://pinterest.com">Pinterest</a></span>
                </div>
                <div className="header-item2-row2">
                    <span><a href="#">Deal</a></span>
                    <span>.</span>
                    <span><a href="#">Find Store</a></span>
                    <span>.</span>
                    <span><a href="#">Upcoming Events</a></span>
                    <span>.</span>
                    <span><a href="#">FAQs</a></span>
                </div>
                <div className="header-item2-row3">
                    <button className="cart-button" onClick={() => redirect('../html/index.htm')}>
                        <img src={cartIcon} height="15px"/>&nbsp;0 items in cart
                    </button>
                </div>
            </div>
            <div className="flex-header-item3">
                <Marquee/>   
            </div>
        </div>
        </div>
    );
}

function HeaderMobile(){
    return (
            <div className="grid-item-header">
                <div className="flex-header-item3">
                    <Marquee/>
                </div>
                <div style={{ display: "flex", height: "60%", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{marginLeft:"5%"}}>
                        <i className="fa-solid fa-bars" onClick={()=><Drawer/>} style={{cursor:"pointer"}}></i>
                        <i className="fa-solid fa-magnifying-glass" style={{marginLeft: "20px"}}></i>
                    </div>
                    <span style={{fontWeight: "bold"}}>Urban D&eacute;n</span>  
                    <div  style={{marginRight: "5%",justifyContent: "space-between"}}>
                       <i className="fa-regular fa-user"style={{marginRight: "20px"}}></i>
                        <i className="fa-solid fa-bag-shopping"></i>  
                    </div>
                </div>
            </div>
            );
}
export {Header,HeaderMobile};
