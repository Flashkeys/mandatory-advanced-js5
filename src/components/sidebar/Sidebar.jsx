import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
const Sidebar = () => {


  return (
    <div className={styles.container}>
      <Link to={`/`} className={styles.h1}>Home</Link>
      <br></br>
      <div className={styles.main}>
        <h3 className={styles.h3}>Main</h3>
        <div className={styles.Links}>
          <Link to={`/Temp`} className={styles.link}>Temp</Link>
          <Link to={`/Temp`} className={styles.link}>Example</Link>
          <Link to={`/Temp`} className={styles.link}>Testing</Link>
          <Link to={`/Temp`} className={styles.link}>ö-råddd</Link>
        </div>
      </div>
    </div>
  )
}
export default Sidebar