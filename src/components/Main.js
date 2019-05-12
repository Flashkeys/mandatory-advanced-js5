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
  if (window.location.pathname !== match.url) { // Kollar om sökvägen inte är match.url ("/home/" eller "/home"), dvs att man går djupare

    // Vi behöver bygga en snyggare funktion som hanterar urler bättre.
    // Har just nu problem med mapp-namn som innehåller mellanslag, där URLen blir "/mapp/mapp%20med%20mellanslag/"
    // I övrigt funkar det som tänkt nu.
    const pathName = window.location.pathname.substring(5); // Städar bort "/home" ur URLen
      dbx.filesListFolder({ path: pathName }) 
        .then((res) => {
          console.log(pathName);
          updateEntries(res.entries);
        })
    } else { // Om det är /home eller /home/ så hämtas root här
      dbx.filesListFolder({ path: "" })
        .then((res) => {
          updateEntries(res.entries);
        })
    }
  }, [window.location.pathname]);

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
