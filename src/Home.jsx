import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
const Home = () => {


    return (
        <div>
            <div className={styles.sidebarContainer}>
                <h3 className={styles.sidebarH3}>main</h3>
                <Link to={`/Temp`}>Temp</Link>
            </div>
        </div>
    )
}
export default Home