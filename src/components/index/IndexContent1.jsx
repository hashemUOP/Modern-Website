import React from "react";
import styles from "../../styles/index.module.css";

function IndexContent1(){
    return (
        <div style={{height:"100%",width:"100%"}}>
            <div className={styles.conetent1Header}>
                <p>Our Services</p>
                <hr/>
            </div>
            <div className={styles.content1FlexContainer}>
                <div className={styles.content1FlexColumns} id="column1">
                    <img src="https://img.icons8.com/ios/50/truck--v1.png" alt="truck--v1"/>
                    <p className={styles.content1TopText}>Free shipping.</p>
                    <p className={styles.content1BottomText}>on orders above $199.0.</p>
                </div>
                <div className={styles.content1FlexColumns} id="column2">
                    <img src="https://img.icons8.com/pastel-glyph/64/communication--v1.png" alt="communication--v1" />
                    <p className={styles.content1TopText}>24/7 Support.</p>
                    <p className={styles.content1BottomText}>Live Chat Or Call.</p>
                </div>
                <div className={styles.content1FlexColumns} id="column3">
                    <img src="https://img.icons8.com/ios/50/bank-cards--v1.png" alt="bank-cards--v1"/>
                    <p className={styles.content1TopText}>Online Payment.</p>
                    <p className={styles.content1BottomText}>Secure Payment Services.</p>
                </div>
                <div className={styles.content1FlexColumns} id="column4">
                    <img src="https://img.icons8.com/pastel-glyph/64/synchronize--v3.png" alt="synchronize--v3"/>
                    <p className={styles.content1TopText}>Easy Return.</p>
                    <p className={styles.content1BottomText}>Hassle Free Shipping.</p>
                </div>
            </div>
        </div>
    );
}
export default IndexContent1;
