import React, { useState } from 'react';

import styles from './css/Card.module.css';
import Moment from 'moment';
import { Link } from "react-router-dom";
import { size } from "./utils";
import { Dropdown } from "react-bootstrap";
const Card = (props) => {

  const [starIcon, updateStarIcon] = useState(props.id === localStorage.getItem(props.id));

  function downloadFile() {
    props.dbx.filesGetTemporaryLink({ path: props.path_lower })
      .then(res => {
        window.location.href = res.link;
      })
      .catch(err => {
        console.log(err);
      })
  }

  // thumbnails
  function getFileType(name) {
    return name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase() || name;
  }

  function isFolder(tag, name) {
    if (tag === "folder") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfDzP9UsOfVcePDGDEmNKNT9Cz7rhBw0QM-GmzTH7bDxfhMZ7TA";
    } else {
      switch (getFileType(name)) {
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
  function getThumbnail(src) {
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
  const toggleStar = () => {
    if (!starIcon) {
      updateStarIcon(true)
      localStorage.setItem(props.id, props.id)
    } else {
      updateStarIcon(false)
      localStorage.removeItem(props.id)
    }
  }
  function onToggle(isOpen) {
    console.log(isOpen);
  }
  return ( // img, filename, tag, server_modified, id
    <div className={styles.newCard}>

      <img className={styles.thumbnail} ref={imgRef} src={isFolder(tag, props.name)} alt="" />
      <div className={styles.meta}>
        {tag === "folder" ? <Link className={styles.link} to={"/home" + props.path_lower}><p className={styles.fileName}> {props.name} </p></Link> : null}
        {tag === "file" ? <button className={styles.fileLink} onClick={() => downloadFile(props.id)} to={null}><p className={styles.fileName}> {props.name} </p></button> : null}
        <div className={styles.metadata}>
          <p className={styles.timestamp}> {timeCheck(props.server_modified)}</p>
          <p className={styles.size}> {size(props.size)} </p>
        </div>
      </div>
      <button className={styles.starIcon} onClick={toggleStar} ><i className={`icon ${starIcon ? "ion-ios-star" : "ion-ios-star-outline"} `}></i></button>
      <div className={styles.dropdownMenu}>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" style={{
            color: "#5ca8e9",
            backgroundColor: "#ffffff00",
            borderColor: "#ffffff00",
          }}>
            <i className="fas fa-ellipsis-v"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>  
            <Dropdown.Item href="#/action-1">New</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Open...</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Save as...</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Rename</Dropdown.Item>
            <Dropdown.Item href="#/action-3"><i className="fas fa-copy" style={{marginRight:"9px"}}></i>Make a copy</Dropdown.Item>
            <Dropdown.Item href="#/action-3"><i className="fas fa-arrows-alt" style={{marginRight:"9px"}}></i>Move to folder</Dropdown.Item>
            <Dropdown.Item href="#/action-3"><i className="fas fa-trash" style={{marginRight:"9px"}}></i> Delete</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Download As...</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
      </div>

    </div>
  )
}

export default Card;

//"2019-05-07T08:23:36Z"
//"YYYY-MM-DD?hh:mm:ss?"