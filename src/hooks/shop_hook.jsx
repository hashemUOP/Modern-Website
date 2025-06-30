import React ,{useState,useRef} from "react";
import DATA from "../hooks/category_data";
import styles from "../styles/shop.module.css";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

export default function CategoryTabs(){
  let data = DATA;
  const [choosenCat,updateCat] = useState("Room");

  
  const ITEM_WIDTH = 200;
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  // function to handle scrolling when the button is clicked 
  const handleScroll = (scrollOffset) => {
  if (containerRef.current) {
    containerRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
  }
};

  return(
    <div className={styles.parent2}>
      <div className={styles.box1}>
        <span style={{fontWeight:"bold",textDecorationLine:"underline",textUnderlineOffset:"7px"}}>Shop by Category</span>
        <div className={styles.listSpan}>
          <span className={choosenCat ==="Room"?styles.choosenText:styles.unchoosenText} onClick={()=>updateCat("Room")}>Room</span>
          <span className={choosenCat ==="Style"?styles.choosenText:styles.unchoosenText} onClick={()=>updateCat("Style")}>Style</span>
          <span className={choosenCat ==="Season"?styles.choosenText:styles.unchoosenText} onClick={()=>updateCat("Season")}>Season</span>
          <span className={choosenCat ==="Furniture Type"?styles.choosenText:styles.unchoosenText} onClick={()=>updateCat("Furniture Type")}>Furniture Type</span>
          <span className={choosenCat ==="Theme"?styles.choosenText:styles.unchoosenText} onClick={()=>updateCat("Theme")}>Theme</span>
          <span className={choosenCat ==="Launch or Trend"?styles.choosenText:styles.unchoosenText} onClick={()=>updateCat("Launch or Trend")}>Launch or Trend</span>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.Container}>
          <div className={styles.scrollWrapper} ref={containerRef}>
            <div className={styles.content_box}>
              {data.find(cat => cat.id === choosenCat)?.subCat.map((item) => (
                <div
                  className={styles.card}
                  style={{ backgroundImage: `url(${item.catImg})` }}
                  key={item.catID}
                >
                  <p>{item.catID}</p>
                </div>
              ))}
            </div>

          </div>
            <div onClick={()=>handleScroll(-ITEM_WIDTH)} className={`${styles.button} ${styles.leftButton}`}><FaChevronLeft/></div>
            <button onClick={()=>handleScroll(ITEM_WIDTH)} className={`${styles.button} ${styles.rightButton}`}><FaChevronRight/></button>
        </div>
      </div>
    </div>    
  );
}