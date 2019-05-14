import React, { useState, useReducer } from 'react';
import styles from './css/Card.module.css';
import Moment from 'moment';
import { Link } from "react-router-dom";
import { size } from "./utils";

const Card = (props) => {

  const [starIcon, updateStarIcon] = useState(false);

<<<<<<< HEAD
  function isFile(tag) { 
=======
  function isFolder(tag) {
    if (tag === "folder") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfDzP9UsOfVcePDGDEmNKNT9Cz7rhBw0QM-GmzTH7bDxfhMZ7TA";
    } else {
      return getThumbnail(props.path_display)
    }
  }

  function isFile(tag, id) { 
>>>>>>> da4c603a670558571ccfb6c567ebb16717e09874
    if (tag === "file") {
      const ACCESS_TOKEN = props.dbx.accessToken;
      const FILE_PATH = "/"
      props.dbx.filesDownload({ path: id })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  // thumbnails


//___________________________-
  function getFileType (name) {
    return name.substring(name.lastIndexOf('.')+1, name.length).toLowerCase()|| name;
  }
 
  function isFolder(tag, name) {
      if (tag === "folder") {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfDzP9UsOfVcePDGDEmNKNT9Cz7rhBw0QM-GmzTH7bDxfhMZ7TA";
      } else {
          switch(getFileType(name)) {
              case "jpg":
              case "jpeg":
              case "png":
              case "svg":
              case "tiff":
              case "tif":
                  return getThumbnail(props.path_display);
              case "pdf":
                  return "https://image.flaticon.com/icons/svg/337/337946.svg";
              default:
                  return "https://www.shareicon.net/data/512x512/2016/04/28/756959_document_512x512.png";
            }
      }
    }

 const imgRef = React.useRef();
 function getThumbnail (src) {
   console.log(src);
   props.dbx.filesGetThumbnail({ path: src }) 
        .then((res) => {
            const thumb = URL.createObjectURL(res.fileBlob);
            imgRef.current.src = thumb;
        })
        .catch(err => {
          console.log(err);
        })
  };


  function timeCheck(time) {
    if (time === undefined) {
      return "";
    } else {
      return Moment(time, "YYYY-MM-DDThh:mm:ssZ").fromNow()
    }
  }

  const tag = props[".tag"];

  return ( // img, filename, tag, server_modified, id
    <div className={styles.newCard}>
<<<<<<< HEAD
    {console.log(props)}
    <Link className={styles.link} onClick={() => isFile(tag)} to={"/home" + props.path_lower}>
      <img className={styles.thumbnail} ref={imgRef} src={isFolder(tag, props.name)} alt="" />
=======
    <Link className={styles.link} onClick={() => isFile} to={"/home" + props.path_lower}>
      <img className={styles.thumbnail} ref={imgRef} src={isFolder(tag)} alt="" />
>>>>>>> da4c603a670558571ccfb6c567ebb16717e09874
      <div className={styles.meta}>
        <p className={styles.fileName}> {props.name} </p>
        <div className={styles.metadata}>
          <p className={styles.timestamp}> {timeCheck(props.server_modified)}</p>
          <p className={styles.size}> {size(props.size)} </p>
        </div>
      </div>
      </Link>
      <button className={styles.starIcon}><i className="icon ion-ios-star-outline"></i></button>
    </div>
  )
}

export default Card;

//"2019-05-07T08:23:36Z"
//"YYYY-MM-DD?hh:mm:ss?"