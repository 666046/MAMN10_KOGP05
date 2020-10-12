import React, { Component } from 'react';
import ai_image from './images/abstract_ai.jpg'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ExpObject from './ExpObject'
import EmotionObject from './EmotionObject'
import {objectList} from './ExpObjectData'

class ExpObjectCompose extends React.Component{
    constructor(props) {
        super()
        this.state = {"expObject" : []};
    }

    handleEmotionChange = (event) => {
        let emotionObject = new EmotionObject();
        //let id = itemValue
        let id = Array.from(event.target.selectedOptions, (item) => item.key);
        let val = Array.from(event.target.selectedOptions, (item) => item.value)
        //let val = event.target.value["emotion"]
        emotionObject.addEmotion(id, val);
        let tempExp = [...this.state.expObject];
        tempExp.push(emotionObject)
        this.setState(prevState => ({
            expObject: tempExp
          }))
    }

  
    renderItems = () => {
      const data = objectList;
      const mapRows = data.map((item, index) => (
        <React.Fragment key = {item.id}>
            <option
            class="btn btn-light btn-rounded"
            value = {item.id, item.emotion}
            >

            {item.emotion}
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
        let tempArray = this.state.expObject
        let newExpObject = new ExpObject();
        for (var i in this.state.expObject){
            newExpObject.addEmotionObject(this.state.expObject[i]);
        }
        
        this.props.callbackFromParent(newExpObject);
        this.setState({expObject: []});
    }

    render() {
        let val = JSON.stringify(this.state.expObject);
        
        return (
            
            <Router>
            <div  className="jumbotron text-center">
                <div  class="p-3 mb-2 bg-info text-white" style={{backgroundImage: `url(${ai_image}` }}>
                    
                        <div class="container"></div>
            
            <div className="form-group">
            <div class="form-group mr-5">
            <select required  multiple={true} id="emotionSelect"  type="button"  onChange={() => this.handleEmotionChange()}>
            {this.renderItems()}
            </select>
            </div>
            </div>
            
            <div class="col">
            <span>{/* knapp*/}</span>
            <button  type="submit" onClick={this.submitAction} class="btn btn-secondary">Submit</button>
            </div>
            </div>
            </div>
            <spam> {val}</spam>
             
            </Router>
            );
    }
}

export default ExpObjectCompose;    
