import React from 'react';
import robot_image from './images/robot_illu.png'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import ExpObject from './ExpObject'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.updateApp = this.updateApp.bind(this);
  }

  /* when clicking for example start -> create new experiment object */
  updateApp(value){
    let newExpObject = new ExpObject();
    this.setState(newExpObject); 
  }

  /*inside render -> return (  <Child2 dataFromParent = {this.state.data} /> ) to sen data from parent to child */
  /* Has to use callback-function for Child -> Parent */
  /* Example-use, press a Start-button, call updateApp to create an object and start another view */

  /*react-bootstrap, exist complete site of specification just showed a few below 
    https://react-bootstrap.github.io/components/alerts */

  render() {
        
        return (
          <div className="Epi-UI">
          <header className="Epi-UI">
            <Container className="p-3">
              <Jumbotron>
                <h1 className="header">Welcome To Epi-UI</h1>
                  <Button value={1}>Option 1</Button>
                  <Button value={2}>Option 2</Button>
                  <Button value={3}>Option 3</Button>
                
              </Jumbotron>
              <img src={robot_image} />
            </Container>
          </header>
        </div>
        );    
  }
}


export default App;
