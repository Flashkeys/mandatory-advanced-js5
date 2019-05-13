import React from 'react';
import styles from './css/Card.module.css';
import Moment from 'moment';
import { Link } from "react-router-dom";
import { size } from "./utils";

const Card = (props) => {

  function isFolder(tag) {
    if (tag === "folder") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfDzP9UsOfVcePDGDEmNKNT9Cz7rhBw0QM-GmzTH7bDxfhMZ7TA";
    } else {
      return props.src
    }
  }

  function timeCheck(time) {
    if (time === undefined) {
      return "";
    } else {
      return Moment(time, "YYYY-MM-DDThh:mm:ssZ").fromNow()
    }
  }

  /* function getThumbnail () {
    
  } */
  
  return( // img, filename, tag, server_modified, id
    <div className={styles.newCard}>
    {console.log(props)}
      <img className={styles.thumbnail} src={isFolder(props.entry[".tag"])} alt="" />
      <div className={styles.meta}>
        <Link className={styles.link} to={"/home" + props.entry.path_lower}><p className={styles.fileName}> {props.name} </p></Link>
        <div className={styles.metadata}>
          <p className={styles.timestamp}> {timeCheck(props.server_modified)}</p>
          <p className={styles.size}> {size(props.entry.size)} </p>
        </div>
        </div>
    </div>
  )
}

export default Card