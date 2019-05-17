import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import styles from './css/Home.module.css';
import Sidebar from './Sidebar';
import Main from "./Main";
import { token$ } from "./store";
import Dropbox from 'dropbox';

const Home = ({ match }) => {
  const [entries, updateEntries] = useState([]);
  const [favoritesShow, updateFavoritesShow] = useState(false);
  
  const dbx = new Dropbox.Dropbox({ accessToken: token$.value });
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

  if (token$.value === null) {
    return <Redirect to="/" />
  }
  return (
    <div className={styles.homeContainer}>
      {favoritesShow ? <div className={styles.favoritesNote}>Your favorites</div> : null}
      <Sidebar
        favoritesShow={favoritesShow}
        updateFavoritesShow={updateFavoritesShow}
        entries={entries}
        updateEntries={updateEntries}
        updateFiles={updateFiles}
      />
      <Main
        match={match}
        entries={entries}
        updateEntries={updateEntries}
        favoritesShow={favoritesShow}
        updateFavoritesShow={updateFavoritesShow}
        updateFiles={updateFiles}
        dbx={dbx}
      />
    </div>
  )
}
export default Home     