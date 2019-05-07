import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import styles from "./css/Main.module.css"
import Temp from "../Temp";
import Dropbox from 'dropbox'
import Card from "./Card";


const dbx = new Dropbox.Dropbox({ accessToken: "EC36sasa05AAAAAAAAAADk0wlkmQPTUjQ-64Ts_4XAoZCHCL6OO9freskWuKV2Ts" });

function Main() {
  const [entries, updateEntries] = useState([]);

  useEffect(() => {
    dbx.filesListFolder({ path: "" })
      .then((res) => {
        console.log(res);
        updateEntries(res.entries);
      })
  }, []);


  return (
    <div>
      <div className={styles.topBar}>
        <h3 className={styles.homeText}>Home</h3>
        <div className={styles.inputHeader}>
          <div className={styles.inputSearch}>
              <input type="text" placeholder="Search..." className={styles.inputSearchInput} />
              <div className={styles.iconSearch}>
                <i className="icon ion-md-search"></i>
              </div>
          </div>
      </div>
    </div>

    <div className={styles.mainContainer}>
            
      {entries.map((entry) => (
              <Card 
                entry={entry}
                name={entry.name}
                src="https://picsum.photos/200/150"
                id={entry.id}
                server_modified={entry.server_modified}
                />
        ))}

    </div>
    </div>
  )
}


export default Main;
