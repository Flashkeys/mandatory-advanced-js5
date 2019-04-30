import React from 'react';
import styles from "./Main.module.css"

function Main() {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.homeText}>
          <h3>Home</h3>
        </div>
        <div className={styles.inputSearch}>
          <input type="text" placeholder="Text..." className={styles.inputSearchInput} />
          <div className={styles.iconSearch}>
            <i className="icon ion-md-search"></i>
          </div>

        </div>
      </div>
      <div className={styles.mainContainer}>
        x
      </div>
    </div>
  )
}

export default Main;