import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { token$, updateToken } from './store.js';
import { breadcrumbs, backButton } from "./utils";
import styles from "./css/Main.module.css";
import Card from "./Card";

function Main(props) {
  const entries = props.entries;
  const match = props.match;
  const updateEntries = props.updateEntries;
  const favoritesShow = props.favoritesShow;

  const [filterdEntries, updatefilterdEntries] = useState([]);

  const [searchInput, updateSearchInput] = useState("");
  const dbx = props.dbx;
  const updateFiles = props.updateFiles;
  const pathName = window.location.pathname;

  useEffect(() => {
    if (searchInput) {
      updatefilterdEntries(entries.filter(entry => entry.name.toLowerCase().startsWith(searchInput.toLowerCase())))
    } else if (!favoritesShow) {
      updatefilterdEntries(entries)
    }
  }, [searchInput, entries, favoritesShow]);

  useEffect(() => {
    if (favoritesShow) {
      updatefilterdEntries(entries.filter(entry => localStorage.getItem(entry.id)))
    } else {
      updatefilterdEntries(entries)
    }

  },[favoritesShow, entries]);

  useEffect(() => {
    updateFiles(pathName);
    // För att rensa ut varningsmeddelandet om outer scope på pathName
    // eslint-disable-next-line
  }, [pathName]);

  const logOut = () => {
    updateToken(null);
    updateEntries([]);
  }

  // Om du inte är inloggad skickar den dig till root, som ber en logga in. 
  // Root kollar motsatsen till detta, har du token$.value så skickar den dig till home.
  if (token$.value === null) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <div className={styles.topBar}>

        <div className={styles.profileBar}>
        </div>
        <button className={styles.logoutButton} onClick={logOut}><i className="icon ion-md-log-out"></i> Logout</button>

        <div className={styles.searchBar}>
          <p className={styles.homeText}>
            {backButton(pathName).map((x) => {
              return <Link key={x.path} className={styles.backButton} to={x.path}><i className="fas fa-arrow-alt-circle-up"></i></Link>
            })}
            {breadcrumbs(pathName).map((x) => { // breadcrumbs skapar en array med objekt från pathname ("/home/path/path"), finns i utils.js
              return (<Link className={styles.bcLink} key={x.path} to={x.path}>{decodeURI(x.name)} <i className="fas fa-chevron-right"></i></Link>)
            })}
          </p>
          <div className={styles.inputHeader}>
            <div className={styles.inputSearch}>
              <div className={styles.iconSearch}>
                <i className="icon ion-md-search"></i>
              </div>
              <input type="text" placeholder="Search.." value={searchInput} onChange={(e) => updateSearchInput(e.target.value)} className={styles.inputSearchInput} />
            </div>
          </div>
        </div>

      </div>

      <div className={styles.mainContainer}>
        {filterdEntries.map((entry) => (
          <Card
            key={entry.id}
            id={entry.id}
            dbx={dbx} //src till thumbnail
            {...entry}
          />
        ))}
      </div>

    </div>


  )
}


export default Main;
