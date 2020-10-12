import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import robot_image from './images/robot_illu3.png'
import ai_image from './images/abstract_ai.jpg'
import './App.css';
import ExpObjectCompose from './ExpObjectCompose'
import ExpObject from './ExpObject'
import ExpViewHistory from './ExpViewHistory'
import ExpMain from './ExpMain';
import EmotionObject from './EmotionObject'
import {objectList} from './ExpObjectData'

class App extends React.Component{
  constructor(props) {
    super();
    this.state = {expObject : [], emotions : [], counter : 1};
  }

  /* when clicking for example start -> create new experiment object */
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
    //this.hydrateStateWithLocalStorage();

    let emotionsObject = new EmotionObject();
    const data = objectList;
    const mapRows = data.map(item => (
          emotionsObject.addEmotion(item.id, item.emotion, item.boolean)
    ));
    this.setState({emotions: emotionsObject });
    
  }
    


  updateExp = () => {

  };

  submitExp = () => {

  };

  /*inside render -> return (  <Child2 dataFromParent = {this.state.data} /> ) to sen data from parent to child */
  /* Has to use callback-function for Child -> Parent */
  /* Example-use, press a Start-button, call updateApp to create an object and start another view */

  /*react-bootstrap, exist complete site of specification just showed a few below 
    https://react-bootstrap.github.io/components/alerts */

  render() {
    let val = JSON.stringify(this.state);

    const expMainElem = (params) => <ExpMain {...params} emotionsObject={this.state.emotions} callbackFromParent={this.updateExp} />;
    //const expViewHistoryElem = (params) => <ExpViewHistory {...params} counter={this.state.counter} callbackFromParent={this.submitExp} />;
    //const expObjectComposeElem = (params) => <ExpObjectCompose {...params} expObject={this.state.expObject} callbackFromParent={this.updateApp} />;
    // <Link className="nav-link" type="button" class = "btn btn-secondary btn-lg" style={{marginRight:10 + 'px'}} to='ExpObjectCompose'>Välj dina emotioner</Link>
    //<Link className="nav-link" type="button" class = "btn btn-secondary btn-lg" style={{marginRight:10 + 'px'}} to='ExpViewHistory'> Se tidigare experiment </Link>
    //<Route path='/ExpObjectCompose' render={expObjectComposeElem}/>
    //<Route path='/ExpViewHistory' render={expViewHistoryElem}/> 

        return (
          <Router>
          <div>
            <div className="jumbotron text-center" style={{backgroundColor: 'white'}}>
              <img src={robot_image} />
              <spam>{val}</spam> 
            </div>
            <div> 
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link className="nav-link" type="button" class = "btn btn-secondary btn-lg" to='ExpMain'> START </Link>
                </li>
              </ul>
            </div>
            
              
              
            <div class="form-group mt-20"> 
            
            <Route path='/ExpMain' render={expMainElem}/>
               
            </div>
            <div>
          

            </div>
          </div>
          
          </Router>

        );    
  } 
}


export default App;
