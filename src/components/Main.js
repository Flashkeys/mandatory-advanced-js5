import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { token$, updateToken } from './store.js'
import styles from "./css/Main.module.css"
import Dropbox from 'dropbox'
import Card from "./Card";


function Main(match) {
  const [entries, updateEntries] = useState([]);
  const dbx = new Dropbox.Dropbox({ accessToken: token$.value });

  useEffect(() => {
  if (match.params.path) {
    const pathName = match.url.substring(5); 
      dbx.filesListFolder({ path: pathName })
        .then((res) => {
          console.log(match);
          updateEntries(res.entries);
        })
    } else {
      dbx.filesListFolder({ path: "" })
        .then((res) => {
          updateEntries(res.entries);
        })
    }
  }, []);

  const logOut = () => {
    updateToken(null);
  }
  
  if (token$.value === null){
    return <Redirect to="/" />
  }

  return (
    <div>
      <div className={styles.topBar}>

        <div className={styles.profileBar}>
        </div>
        <button onClick={logOut}><i className="fas fa-sign-out-alt"></i> SIGN OUT </button>
        <div className={styles.searchBar}>
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

      </div>

      <div className={styles.mainContainer}>
        {entries.map((entry) => (
          <Card
            key={entry.id}
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
