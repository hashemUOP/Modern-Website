import React from "react";


function IndexContent1(){
    return (
            <div className="grid-item-content1">
                <div className="conetent1-header">
                    <p>Our Services</p>
                    <hr/>
                </div>
                <div className="content1-flex-container">
                    <div className="content1-flex-columns" id="column1">
                        <img src="https://img.icons8.com/ios/50/truck--v1.png"alt="truck--v1"/>
                        <p className="content1-top-text">Free shipping.</p>
                        <p className="content1-bottom-text">on orders above $199.0.</p>
                    </div>
                    <div className="content1-flex-columns" id="column2">
                        <img src="https://img.icons8.com/pastel-glyph/64/communication--v1.png" alt="communication--v1" />
                        <p className="content1-top-text">24/7 Support.</p>
                        <p className="content1-bottom-text">Live Chat Or Call.</p>
                    </div>
                    <div className="content1-flex-columns" id="column3">
                        <img  src="https://img.icons8.com/ios/50/bank-cards--v1.png" alt="bank-cards--v1"/>
                        <p className="content1-top-text">Online Payment.</p>
                        <p className="content1-bottom-text">Secure Payment Services.</p>
                    </div>
                    <div className="content1-flex-columns" id="column4">
                        <img  src="https://img.icons8.com/pastel-glyph/64/synchronize--v3.png" alt="synchronize--v3"/>
                        <p className="content1-top-text">Easy Return.</p>
                        <p className="content1-bottom-text">Hassle Free Shipping.</p>
                    </div>
                </div>
            </div>
            
    );
}
export default IndexContent1;