import React, { useState } from "react";
import styles from "../../styles/collections.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep, faAngleRight,faAngleLeft,faBackwardStep} from "@fortawesome/free-solid-svg-icons"; 


export default function Paginator() {
  return (
    <>
      <div className={styles.containerPag}>
        <div className={styles.row1Pag}>
          <span>Items per page</span>
          <BootstrapDropdown />
          <span>1-25 of 500 items</span>
        </div>
        <div className={styles.row2Pag}>
          <button><FontAwesomeIcon icon={faBackwardStep} /></button>
          <button><FontAwesomeIcon icon={faAngleLeft} /></button>
          <button>1</button>
          <button style={{backgroundColor:"black",color:"white"}}>2</button>
          <button>3</button>
          <button>4</button>
          <button>...</button>
          <button><FontAwesomeIcon icon={faAngleRight} /></button>
          <button><FontAwesomeIcon icon={faForwardStep} /></button>
        </div>
      </div>
    </>
  );
}

const BootstrapDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle" style={{backgroundColor:"black",color:"white",border:"none"}}
        onClick={() => setIsOpen(!isOpen)}
      >
        25
      </button>

      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        <li>
          <a className="dropdown-item" href="#">
            Option 1
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Option 2
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Option 3
          </a>
        </li>
      </ul>
    </div>
  );
};
