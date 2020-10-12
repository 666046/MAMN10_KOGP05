import React, { Component } from 'react';
import ai_image from './images/abstract_ai.jpg'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {objectList} from './ExpObjectData'

class ExpEyeColor extends React.Component{
    constructor(props) {
        super()
        this.state = {expOrder : 1, emotionObjects : ''};
    }

    handleEmotionChange = (event) => {
        
    }

    componentDidMount = () => {
        const expEmotions = this.props.emotionsObject;
        let emotions = expEmotions.emotionsObject;
        this.setState({emotionObjects: emotions});
    }

    renderItems = () => {
        const data = objectList;
        const mapRows = data.map((emotionObj, index) => (
          <React.Fragment key = {emotionObj.id}>
              <option
              class="btn btn-light btn-rounded"
              value = {emotionObj.id, emotionObj.emotion}
              >
                {emotionObj.emotion}
              </option>
          </React.Fragment>
        ));
        return mapRows;
      };    

    submitAction = (event) => {
        event.preventDefault();
        event.target.classList.add("was-validated");
        if(event.target.checkValidity() === false){ 
            return;
        }
        
    }

    render() {
        const expEmotions = this.props.emotionsObject;
        let emotions = expEmotions.emotionsObject;

        let val = JSON.stringify(emotions);
        
        return (
            
            <Router>
            <div  className="jumbotron text-center">
                <div  class="p-3 mb-2 bg-info text-white" style={{backgroundImage: `url(${ai_image}` }}>
                    
                        <div class="container"></div>
            
            <div className="form-group">
            <div class="form-group mr-5">
            <select required  multiple={true} id="emotionSelect"  type="button"  onChange={() => this.handleEmotionChange()} value={this.state.emotionObjects}>
            {this.renderItems()}
            </select>
            </div>
            </div>
        
            </div>
            </div>
            
             
            </Router>
            );
    }
}

export default ExpEyeColor;   
