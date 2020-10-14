import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Switch} from "react-router-dom";
import robot_image from './images/robot_illu3.png'
import './App.css';
import EmotionObject from './EmotionObject'
import ExpObject from './ExpObject'
import ExpEyeColor from './ExpEyeColor'
import ExpPupilSize from './ExpPupilSize'
import ExpPupilOrientation from './ExpPupilOrientation'
import {objectList} from './ExpObjectData'
import ExpMain from './ExpMain';
import PrevResult from './PrevResult';
import Result from './Result';

class App extends React.Component{
  constructor(props) {
    super();
    this.state = {expObject : [], emotionsObject : [], emotionDisplay: '', counter : 1, currentState: 0};
  }

  updateApp = (value) =>{
    let newExpObject = new ExpObject()
    newExpObject = value;
    let tempExp = [...this.state.expObject];
    tempExp.push(newExpObject)
    this.setState(prevState => ({
            expObject: tempExp
          }))
    this.state.counter = this.state.counter + 1;
  }

  componentDidMount() {

    let emotionsObject = new EmotionObject();
    const data = objectList;
    const mapRows = data.map(emotion => (
          emotionsObject.addEmotion(emotion.id, emotion.emotion, emotion.boolean)
    ));
    this.setState({emotionsObject: emotionsObject.emotionsObject});
  }

  startExp = () => {
    let newExpObject = new ExpObject();
    let randomEmotion = Math.floor((Math.random() * objectList.length ) + 1);
    this.setState({expObject: newExpObject.expObject, emotionDisplay:  randomEmotion});
  }
  
  changeCurrentState = (stateValue) => {
    this.setState({currentState : stateValue});
  }

  updateExp = (expObj) => {
    let tempExpObj = [...this.state.expObject];
    if (this.state.currentState == 0){
        tempExpObj[0].expOne = expObj;
    } else if (this.state.currentState == 1){
        tempExpObj[1].expTwo = expObj;
    } else if (this.state.currentState == 2){
        tempExpObj[2].expThree = expObj;
    }
    this.setState(prevState => ({
        expObject: tempExpObj
      }))
  }

  exitExp = () => {
    this.setState({expObject : [], emotionDisplay: '', counter : 1, currentState: 0});
  };

  render() {
    const expEmotions = this.state.emotionsObject;
    let emotions = expEmotions;
    const emDisplay = this.state.emotionDisplay;
    const stateValue = this.state.currentState;
    const experiment = this.state.expObject;

    const expEyeColorElem = (params) => <ExpEyeColor {...params} emotionsObject={emotions} emotionDisplay={emDisplay} callbackFromParent={this.updateExp} callbackFromParentExit={this.exitExp}/>;
    const expPupilSizeElem = (params) => <ExpPupilSize {...params} emotionsObject={expEmotions} emotionDisplay={emDisplay} callbackFromParent={this.updateExp} callbackFromParentExit={this.exitExp}/>;
    const expPupilOrientationElem = (params) => <ExpPupilOrientation {...params} emotionsObject={expEmotions} emotionDisplay={emDisplay} callbackFromParent={this.updateExp} callbackFromParentExit={this.exitExp}/>;
    const prevResultElem = (params) => <PrevResult {...params} currentState={stateValue} callbackFromParent={this.changeCurrentState}/>;
    const resultElem = (params) => <Result {...params} expObject={experiment} callbackFromParent={this.exitExp}/>;
    const expMainElem = (params) => <ExpMain {...params}  callbackFromParent={this.startExp}/>;

        return (
          <Router>
          <div>
            <div className="jumbotron text-center" style={{backgroundColor: 'white'}}>
              <img src={robot_image} />
              <div className="jumbotron text-center" style={{backgroundColor: 'white'}}>
              <Link className="nav-link" type="button" class = "btn btn-primary mr-1" to='ExpMain'>Intro</Link>
            </div>
            </div>
            
            
              
              
            <div class="form-group mt-20"> 
            <Switch>
              <Route path ='/ExpMain' component = {expMainElem}/>
              <Route path='/ExpEyeColor' component={expEyeColorElem}/>
              <Route path='/ExpPupilSize' component={expPupilSizeElem}/>
              <Route path='/ExpPupilOrientation' component={expPupilOrientationElem}/>
              <Route path='/PrevResult' component={prevResultElem}/>
              <Route path='/Result' component={resultElem}/>
            </Switch>
               
            </div>
            <div>
          

            </div>
          </div>
          
          </Router>

        );    
  } 
}


export default App;
