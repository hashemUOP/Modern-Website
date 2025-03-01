import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function redirect(ref){
    window.location.href= ref;
}

function IndexContent2(){
    return  (
        <div className="grid-item-content2">
                <div className="content2-flex-container">
                    <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                    <form className="form-button-row">
                        <input className="input" type="email" placeholder="Enter Your Email"/>
                        <button onClick={()=>redirect('#')} style={{cursor: "pointer"}}>
                            <i className="fa fa-envelope"></i> Subscribe
                        </button>
                    </form>
                    <div className="content2-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
    );
}
export default IndexContent2;