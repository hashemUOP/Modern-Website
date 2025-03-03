import React from "react";
import img1 from "../../assets/img/kam-idris-_HqHX3LBN18-unsplash.jpg";
import mobileImg from "../../assets/img/istockphoto-1353370305-612x612.webp";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "../../styles/index.module.css";

function redirect(ref) {
  window.location.href = ref;
}

function IndexImages() {
  return (
    <div className={styles.gridItemImages}>
      <div className={styles.imgsContainer}>
        <img src={img1} className={styles.backgroundImg} alt="Kam-idris Art" />

        <div className={styles.overlay}>
          <button className={styles.arrow}>
            <i className="fa fa-arrow-left"></i>
          </button>

          <div className={styles.textContent}>
            <div>
              <h1>Urban Elegance</h1>
              <h6>Natural Fabrics for Modern Living</h6>
            </div>

            <div className={styles.buttons}>
              <button className={styles.buttonShop} onClick={() => redirect('#')}>
                Shop Now
              </button>
              <button className={styles.buttonView} onClick={() => redirect('#')}>
                View All
              </button>
            </div>
          </div>

          <button className={styles.arrow}>
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function IndexImagesMobile() {
  return (
    <div className={styles.gridItemImages}>
      <img src={mobileImg} className={styles.imagesImage} />
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
