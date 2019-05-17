import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import styles from './css/Home.module.css';
import Sidebar from './Sidebar';
import Main from "./Main";
import { token$ } from "./store";

const Home = ({ match }) => {
  const [entries, updateEntries] = useState([]);
  const [favoritesShow, updateFavoritesShow] = useState(false);

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
      />
      <Main
        match={match}
        entries={entries}
        updateEntries={updateEntries}
        favoritesShow={favoritesShow}
        updateFavoritesShow={updateFavoritesShow}
      />
    </div>
  )
}
export default Home     