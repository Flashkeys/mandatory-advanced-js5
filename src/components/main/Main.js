import React from 'react';
import styles from "./Main.module.css"

function Main() {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.homeText}>
          <h3>Home</h3>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className={styles.mainContainer}>
        x
      </div>
    </div>
  )
}

export default Main;