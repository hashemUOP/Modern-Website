import React,{useState} from "react";
import img1 from "../../assets/img/kam-idris-_HqHX3LBN18-unsplash.jpg";
import img2 from "../../assets/img/index/becca-tapert-dO3qTKxwik0-unsplash.jpg";
import img3 from "../../assets/img/index/michael-oxendine-GHCVUtBECuY-unsplash.jpg";
import img4 from "../../assets/img/index/spacejoy-sh6Aj176NAQ-unsplash (1).jpg";
import mobileImg from "../../assets/img/istockphoto-1353370305-612x612.webp";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "../../styles/index.module.css";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import { Link} from "react-router-dom";


const imgs=[
  img1,
  img2,
  img3,
  img4
];
function IndexImages() {
  //counter for image 
  let [count,setCount] = useState(0);
  return (
    <div style={{height:"100%"}}>
      <div className={styles.imgsContainer}>
        <img src={imgs[count]} className={styles.backgroundImg} alt="Art" />

        <div className={styles.overlay}>
          <button className={styles.arrow} onClick={() => setCount(count === 0 ? 3 : count - 1)}>
          <FaArrowLeft />
          </button>

          <div className={styles.textContent}>
            <div>
              <h1>Urban Elegance</h1>
              <h6>Natural Fabrics for Modern Living</h6>
            </div>

            <div className={styles.buttons}>
              <Link to="/shop" style={{all:"unset"}}>
                <button className={styles.buttonShop}>
                  Shop Now
                </button>
              </Link>
              <Link to="/collections" style={{all:"unset"}}>
                <button className={styles.buttonView}>
                  View All
                </button> 
              </Link>
            </div>
          </div>
          <button className={styles.arrow} onClick={() => setCount(count === 3 ? 0 : count + 1)}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function IndexImagesMobile() {
  return (
    <div className={styles.gridItemImages}>
      <img src={mobileImg} className={styles.imagesImage} alt="card"/>
      <div className={styles.imagesCol}>
        <h1>Give a hint</h1>
        <p>
          Urban D&eacute;n offers stylish, high-quality furniture designed for every taste and lifestyle.
          With a focus on craftsmanship, sustainability, and seamless online shopping, we make furnishing your home effortless.
        </p>
        <button>
          Learn more
        </button>
      </div>
    </div>
  );
}

export { IndexImages, IndexImagesMobile };
