import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Sidebar.module.css';
import logo from "../logo.png";
import Modal from "./Modal";
   
const Sidebar = () => {
  const  [isShowing, updateIsShowing ] = useState(false);
  const [type, updateType] = useState(""); // => uploadFile

  const togleModal = (e) =>{
    const type = e.target.id; // => "uploadFile"
    console.log(type);
    
    updateIsShowing(!isShowing)
    updateType(type);
    console.log("togle");
    
  }

  return (
    <div className={styles.container}>
      <div>
        <Link to="/home/">
          <img src={logo} className={styles.logo} alt=""/>
        </Link>
        <div className={styles.main}>
          <h3 className={styles.h3}>Meny</h3>
          <div className={styles.Links}>
          
            <Link to="/home/" className={styles.link}>Filer (root)</Link>
            <button  className={styles.openButton} id="createFolder" onClick={togleModal}>Create Folder</button>
            <button  className={styles.openButton} id="uploadFile" onClick={togleModal}>Upload Folder</button>
          </div>
        </div>
      </div>
      <div className={styles.storageHeader}>
        <p> / 2 GB</p>
        <progress id="file" max="100" value="70"> 70% </progress>
      </div>
      
   {isShowing ? <Modal togle={togleModal}  type={type} /> : null}
    </div>
  )
}
export default Sidebar