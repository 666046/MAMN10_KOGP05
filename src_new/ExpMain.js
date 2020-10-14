import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import ExpObject from './ExpObject'
import ExpEyeColor from './ExpEyeColor'
import ExpPupilSize from './ExpPupilSize'
import ExpPupilOrientation from './ExpPupilOrientation'
import {objectList} from './ExpObjectData'
import Switch from 'react-bootstrap/esm/Switch';

class ExpMain extends React.Component{
    constructor(props) {
        super()
    }

    handleClick = (event, path) => {
        this.props.callbackFromParent();
        this.props.history.push(path);
    }

    render() {

        return (
            
        
            <div>
                <div className= "jumbotron text-center"> 
                    <button  onClick={(e) => this.handleClick(e, '/ExpEyeColor')} type="submit" class="btn btn-primary">Start</button>
                </div>
                
                <div class="form-group mt-20">
                
                
                </div>
            </div>
          
             
            );
    }
}

export default ExpMain;    
