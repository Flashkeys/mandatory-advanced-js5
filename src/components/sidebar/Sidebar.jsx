import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
const Sidebar = () => {


  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarMain}>
        <h3 className={styles.sidebarH3}>Main</h3>
        <div className={styles.sidebarLinks}>
          <Link to={`/Temp`} className={styles.sidebarLink}>Temp</Link>
          <Link to={`/Temp`} className={styles.sidebarLink}>Example</Link>
          <Link to={`/Temp`} className={styles.sidebarLink}>Testing</Link>
          <Link to={`/Temp`} className={styles.sidebarLink}>ö-råd</Link>
        </div>
      </div>
    </div>
  )
}
export default Sidebar