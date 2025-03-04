import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import cardImage1 from "../../assets/img/serene-coaster-sectional-beige-551321_20-768x614.jpg";
import cardImage2 from "../../assets/img/data_bed-with-storage_adolph-bed-with-side-storage_revised_revised_walnut_updated_new-logo_1-810x702.jpg";
import cardImage3 from "../../assets/img/image132630.jpg";
import cardImage4 from "../../assets/img/image119096.jpg";
import cardImage5 from "../../assets/img/french-linen-olive-green-hero_14.jpg";
import cardImage6 from "../../assets/img/81dfKK-q0AL.jpg";
import styles from "../../styles/index.module.css";
import { FaArrowRight } from "react-icons/fa6";


const cardsInfo = [
    { text1: "Cloud Sectional Sofa", text2: "Five Stars China Factory", img: cardImage1 },
    { text1: "Compact Wooden Storage Bed", text2: "DKHousehold Products", img: cardImage2 },
    { text1: "Solid Oak Dining Chair", text2: "Josra Ivory", img: cardImage3 },
    { text1: "Oli Green Sofa", text2: "Timber", img: cardImage4 },
    { text1: "French Oli Green Bed", text2: "Soak&Sleep", img: cardImage5 },
    { text1: "GreyWood Dining Chair", text2: "Josra Ivory", img: cardImage6 }
];

function scrollRight() {
    document.getElementById("scrollContainer").scrollBy({
        left: 200, // scroll 200px to the right
        behavior: "smooth"
    });
}

function IndexCards() {
    return (
        <div style={{height:"100%"}}>
            <div className={styles.cardsContainer} id="scrollContainer">
                {cardsInfo.map((card, index) => (
                    index === 0 ?
                    <div className={styles.card} style={{ marginLeft: "25px" }} key={index}>
                        <img src={card.img} className={styles.backgroundImg} alt={card.text1} />
                        <p className={styles.cardTextTop}>{card.text1}</p>
                        <p className={styles.cardTextBottom}>{card.text2}</p>
                    </div>
                    :
                    <div className={styles.card} key={index}>
                        <img src={card.img} className={styles.backgroundImg} alt={card.text1} />
                        <p className={styles.cardTextTop}>{card.text1}</p>
                        <p className={styles.cardTextBottom}>{card.text2}</p>
                    </div>
                ))}
                <button className={styles.arrowButton} onClick={scrollRight}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default IndexCards;
