import React /*, {useState, useEffect, useReducer, useRef }*/ from 'react';
//import PropTypes from 'prop-types';
import "./Container.css"

const Container = () => {
    //constructor(props) {
        //super(props);

     

        

        return (
          <div className="card-container">
          
            <div> 
            <form>
                <label for="file">Choose a file to upload</label>
                <br></br><br></br>
                <input type="file"
                        id="file" name="file"
                        accept="*"/>
                        <br></br><br></br>      
                <button type="submit"> Upload </button>
            </form>
                
            </div>

          </div>
        );
    

}
export default Container