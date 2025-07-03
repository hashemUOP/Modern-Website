import React,{useState} from "react";
import { IoFilterSharp } from "react-icons/io5";
import styles from "../../styles/collections.module.css";


export default function FilterModal(){

    const [modal, setModal] = useState(false);
    const toggleModal = () =>{
        setModal(!modal);
    }
    return(
        <div>
            {/* button to open modal */}
            <button className={styles.filterButton} onClick={toggleModal}>
                <IoFilterSharp style={{fontSize:"20px",color:"white",marginRight:"7px"}} />    
                Filter
            </button>
            {/* Modal overlay */}
            {modal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h3 style={{marginTop:"30px",marginLeft:"20px"}}>Filter Options</h3>
                            <button onClick={() => setModal(false)} className={styles.closeButton} style={{marginRight:"20px"}}>
                                Close
                            </button>
                        </div>
                        <button
                            onClick={() => setModal(false)}
                            className={styles.applyButton}
                            style={{ marginTop: "auto" }}
                            >
                            Apply Changes
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}