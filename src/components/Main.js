import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { token$, updateToken } from './store.js';
import { breadcrumbs, backButton } from "./utils";
import styles from "./css/Main.module.css";
import Dropbox from 'dropbox';
import Card from "./Card";

function Main(match) {
  const [entries, updateEntries] = useState([]);
  const dbx = new Dropbox.Dropbox({ accessToken: token$.value });
  const pathName = window.location.pathname;
  

  function updateFiles(pathName) {
    if (pathName !== match.url) { // Kollar om sökvägen inte är match.url ("/home/" eller "/home"), dvs att man går djupare
    const fixedPathName = pathName.substring(5); // substring städar bort "/home" ur URLen
      dbx.filesListFolder({ path: decodeURI(fixedPathName) }) 
        .then((res) => {
          updateEntries(res.entries);
        })
    } else { // Om det är /home eller /home/ så hämtas root här
      dbx.filesListFolder({ path: "" })
        .then((res) => {
          updateEntries(res.entries);          
        })
    }
  }

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
        <button className={styles.logoutButton} onClick={logOut}><i className="fas fa-sign-out-alt"></i> SIGN OUT </button>
        
        <div className={styles.searchBar}>
          <h3 className={styles.homeText}>
            {backButton(pathName).map((x) => {
              return <Link className={styles.backButton} to={x.path}><i className="icon ion-md-arrow-round-up"></i></Link>
            })}
            {breadcrumbs(pathName).map((x) => { // breadcrumbs skapar en array med objekt från pathname ("/home/path/path"), finns i utils.js
            return (<Link className={styles.bcLink} key={x.path} to={x.path}>{decodeURI(x.name)} <i class="fas fa-angle-right"></i> </Link>)
            })}
          </h3>
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
