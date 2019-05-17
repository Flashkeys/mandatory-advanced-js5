import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Sidebar.module.css';
import logo from "../logo.png";
import Modal from "./Modal";

const Sidebar = (props) => {
  const favoritesShow = props.favoritesShow;
  const updateFavoritesShow = props.updateFavoritesShow;

  const [isShowing, updateIsShowing ] = useState(false);
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
      <Link to="/home/" className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt=""/>
      </Link>
      <div>
        <div className={styles.main}>
          <h3 className={styles.h3}>Meny</h3>
          <div className={styles.Links}>
          
            <Link to="/home/" className={styles.link}>Filer (root)</Link>
            <button className={styles.openButton} id="createFolder" onClick={togleModal}>Create New Folder</button>
            <button className={styles.openButton} onClick={() => updateFavoritesShow(!favoritesShow) }>My Favorites</button>
            <button style={{ marginTop: "20px", backgroundColor: "#5ba8e9",textAlign:" center",color: "white",    padding: "9px 1px",}}className={styles.openButton} id="uploadFile" onClick={togleModal}>Upload File</button>
          </div>
        </div>
      </div>
      <div className={styles.storageBox}>
        <p>1.2 / 2 GB used</p>
        <progress className={styles.storageProgress} id="file" max="100" value="70"> 70% </progress>
      </div>
      
   {isShowing ? <Modal {...props} togle={togleModal}  type={type}   updateIsShowing={updateIsShowing}/> : null}
     </div>
  )
}
export default Sidebar