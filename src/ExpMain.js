import React, { Component } from 'react';
import ai_image from './images/abstract_ai.jpg'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ExpObject from './ExpObject'
import ExpEyeColor from './ExpEyeColor'
import ExpPupilSize from './ExpPupilSize'
import ExpPupilOrientation from './ExpPupilOrientation'

class ExpMain extends React.Component{
    constructor(props) {
        super()
        this.state = {expObject : []};
    }

    updateExpObject = (expNumber) => {
        let tempExp = [...this.state.expObject];
        //tempExp.expNumber
    this.setState(prevState => ({
            expObject: tempExp
          }))

    }

    componentDidMount() {
        let newExpObject = new ExpObject();
        this.setState({expObject: newExpObject});
    }

    

    submitAction = (event) => {
        event.preventDefault();
        event.target.classList.add("was-validated");
        if(event.target.checkValidity() === false){ 
            return;
        }
        
    }

    render() {
        const expEmotions = this.props.emotionsObject;
        let emotions = expEmotions;
        const expEyeColorElem = (params) => <ExpEyeColor {...params} emotionsObject={emotions} callbackFromParent={this.updateExpObject} />;
        const expPupilSize = (params) => <ExpPupilSize {...params} emotionsObject={emotions} callbackFromParent={this.updateExpObject} />;
        const expPupilOrientation = (params) => <ExpPupilOrientation {...params} emotionsObject={emotions} callbackFromParent={this.updateExpObject} />;

        let val = JSON.stringify(emotions);

        //const expObjectComposeElem = (params) => <ExpObjectCompose {...params} expObject={this.state.expObject} callbackFromParent={this.updateApp} />;

        return (
            
            <Router>
            <div>
                <spam> {val}</spam>
                <div className="jumbotron text-center" style={{backgroundColor: 'white'}}>
                </div>
                <div> 
                <ul className="nav nav-pills">
                    <li className="nav-item">

                    </li>
                </ul>
                </div>
                
                
                
                <div class="form-group mt-20"> 
                <Route path='/' component={expEyeColorElem}/>
                <Route path='/' component={expPupilSize}/>
                <Route path='/' component={expPupilOrientation}/>
                </div>
                <div>
            

                </div>
            </div>
          
    
             
            </Router>
            );
    }
}

export default ExpMain;    
