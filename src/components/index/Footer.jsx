import React , { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function redirect(ref){
    window.location.href= ref;
}


function Footer(){
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
      setYear(new Date().getFullYear());
    }, []);
    return (
        <div className="grid-item-footer">
            <div className="footer-container">
                <div className="footer-columns">
                    <p className="header">Urban D&eacute;n</p>
                    <p id ="footer-style"> 
                        Style That Speaks, Comfort That Lasts.
                    </p>
                    <div className="footer-social">
                        <a href="https://facebook.com"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://x.com"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-columns">
                    <p className="header">Products</p>
                    <p onClick={()=>redirect("#")}>Overview</p>
                    <p onClick={()=>redirect("#")}>Customer stories</p>
                </div>
                <div className="footer-columns">
                    <p className="header">Resources</p>
                    <p onClick={()=>redirect("#")}>Blog</p>
                    <p onClick={()=>redirect("#")}>What's new</p>
                    <p onClick={()=>redirect("#")}>Help Center</p>
                </div>
                <div className="footer-columns">
                    <p className="header">Services</p>
                    <a href="../html/login.htm" style={{all:"unset"}}>
                        <p>Log In and Sign Up</p>
                    </a>
                    <p onClick={()=>redirect("#")}>payment</p>
                </div>
                <div className="footer-columns">
                    <p className="header">Company</p>
                    <p onClick={()=>redirect("#")}>About us</p>
                    <p onClick={()=>redirect("#")}>Contact support</p>
                </div>
            </div>
            <hr/>
            <p id="setYear" className="footer-span">
                Copyright &copy; {year} | Urban D&eacute;n. All rights reserved.
            </p>
        </div>
    );
}
export default Footer;