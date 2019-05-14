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
      return getThumbnail(props.path_display)
    }
  }

  function isFile(tag) {
    if (tag === "file") {
      const ACCESS_TOKEN = props.dbx.accessToken;
      const FILE_PATH = "/"
      props.dbx.filesDownload({ path: decodeURI(props.entry.path_lower) })
        .then(data => {
          console.log(data);
        })
    }
  }

  const imgRef = React.useRef();
  function getThumbnail(src) {
    props.dbx.filesGetThumbnail({ path: src })
      .then((res) => {
        const thumb = URL.createObjectURL(res.fileBlob);
        imgRef.current.src = thumb;

      })
  };


  function timeCheck(time) {
    if (time === undefined) {
      return "";
    } else {
      return Moment(time, "YYYY-MM-DDThh:mm:ssZ").fromNow()
    }
  }

  const tag = props.entry[".tag"];

  return ( // img, filename, tag, server_modified, id
    <div className={styles.newCard}>
      {console.log(props)}
      <Link className={styles.link} onClick={() => isFile(tag)} to={"/home" + props.entry.path_lower}>
        <img className={styles.thumbnail} src={isFolder(tag)} alt="" />
        <div className={styles.meta}>
          <p className={styles.fileName}> {props.name} </p>
        <div className={styles.metadata}>
          <p className={styles.timestamp}> {timeCheck(props.server_modified)}</p>
          <p className={styles.size}> {size(props.size)} </p>
        </div>
      </div></Link>
      
      { isShowing ? <Modal /> : null }
    </div>

    

  )
}

export default Card;

//"2019-05-07T08:23:36Z"
//"YYYY-MM-DD?hh:mm:ss?"