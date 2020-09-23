import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ExpObject{
    constructor() {
        this.expObject = {'Anger': '', 'Fear': '', 'Disgust': '', 'Happiness':'', 'Sadness':'', 'Surprise':'','Contempt':'' }
        
    }
    
    addAngerPerception(perception){
        this.expObject.Anger = perception;
    };
    
    /* add method for every perception or create general case */
}

export default ExpObject;