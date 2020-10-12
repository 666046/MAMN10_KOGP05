import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ExpObject{
    constructor() {
        this.expObjects = {expOne: [], expTwo: [], expThree: []};
        
    }
    
    addEmotionObject(expNumber, emotionObject){
        if (expNumber == 1){
            this.expObjects.expOne.push(emotionObject);

        }else if (expNumber == 2){
            this.expObjects.expTwo.push(emotionObject);

        }else if (expNumber == 3){
            this.expObjects.expThree.push(emotionObject);

        }
    }
     
}

export default ExpObject;