import React from "react";
import img1 from "../../assets/img/kam-idris-_HqHX3LBN18-unsplash.jpg";
import mobileImg from "../../assets/img/istockphoto-1353370305-612x612.webp";
import '@fortawesome/fontawesome-free/css/all.min.css';

function redirect(ref){
    window.location.href= ref;
}

function IndexImages(){
    return (
        <div className="grid-item-images">
            <div className="imgs-container">
                <img src={img1} class="background-img" alt="Kam-idris Art"/> 
                
                <div className="overlay">
                    <button className="arrow"><i className="fa fa-arrow-left"></i></button>
        
                    <div className="text-content">
                        <div>
                            <h1>Urban Elegance</h1>
                            <h6>Natural Fabrics for Modern Living</h6>  
                        </div>
                        
                        <div className="buttons">
                            <button className="button-shop"onClick={()=>redirect('#')}>Shop Now</button>
                            <button className="button-view"onClick={()=>redirect('#')}>View All</button>
                        </div>
                    </div>
        
                    <button className="arrow"><i className="fa fa-arrow-right"></i></button>
                </div>  
            </div>
        </div>
    );
}

function IndexImagesMobile(){
    return (
        <div className="grid-item-images">
                <img src={mobileImg} class="images-image"/>
                <div className="images-col">
                    <h1>Give a hint</h1>
                    <p>
                        Urban D&eacute;n offers stylish, 
                        high-quality furniture designed for every taste and lifestyle. 
                        With a focus on craftsmanship, sustainability, 
                        and seamless online shopping, we make furnishing your home effortless.
                    </p>
                    <button>
                        Learn more
                    </button>
                </div>
        </div>
    );
}
export {IndexImages,IndexImagesMobile};