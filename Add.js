import React from 'react';
import styles from './css/Add.module.css';


const Add = () => {

    return(
        <div>
            <form>
                <label for="addFile">Add a new file or folder</label>
                <br></br><br></br>
                <input type="file"
                        id="newFile" name="addFile"
                        accept="*"/>
                        <br></br><br></br>      
                <button type="submit"> Upload </button>
            </form>
        </div>
    );
}
export default Add