import React from 'react';
import ai_image from './images/abstract_ai.jpg';

class ExpPupilOrientation extends React.Component{
    constructor(props) {
        super()
        this.state = {expObject : [], emotionsObject : [], emotionDisplay: '', currentState:''};
    }

    handleClick = (event, path) => {
        this.submitAction(event);
        this.props.history.push(path);
    }

    handleEmotionChange = (event) => {
        let tempEmotionsObj = [...this.state.emotionsObject];
        let emObject = [...this.state.expObject];
        tempEmotionsObj.map(emObj =>{
            if (emObj.id == event.target.value){
                emObject.push({ id: emObj.id, emotion: emObj.emotion, boolean: emObj.boolean})
            }
        })
        this.setState(prevState => ({
            expObject: emObject
          }))
    }

    componentDidMount = () => {
        let stateValue = this.props.currentState;
        let emotions = this.props.emotionsObject;
        let emotionDisplay = this.props.emotionDisplay;
        this.setState({emotionsObject: emotions, emotionDisplay: emotionDisplay, currentState: stateValue});
    }

    renderItems = () => {
        const data = this.state.emotionsObject;
        const mapRows = data.map(emotionObj => (
          <React.Fragment key = {emotionObj.id}>
              <option
              class="btn btn-light btn-rounded"
              value = {emotionObj.id}
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
        let expObj = this.state.expObject;
        this.props.callbackFromParent(expObj);
        this.state = {expObject : [], emotionsObject : [], emotionDisplay: ''}

        
    }

    exitExperiment = (event) => {
        event.preventDefault();
        event.target.classList.add("was-validated");
        if(event.target.checkValidity() === false){ 
            return;
        }
        this.props.callbackFromParentExit();
        this.props.history.push('/')
    }

    render() {

        let val = JSON.stringify(this.state.expObject);
        return (
            
            <div  className="jumbotron text-center">
                <div  class="p-3 mb-2 bg-info text-white" style={{backgroundImage: `url(${ai_image}` }}>
                    
                        <div class="container"></div>
            
            <div className="form-group">
            <div class="form-group mr-5">
            <select required  multiple={true} id="emotionSelect"  type="button"  onChange={(e) => this.handleEmotionChange(e)} value={this.state.emotionObjects}>
            {this.renderItems()}
            </select>
            </div>
            </div>
            <div class="row">
            <button  onClick={(e) => this.exitExperiment(e)} type="submit" class="btn btn-primary">Exit</button>
            <button  onClick={(e) => this.handleClick(e, '/PrevResult')} type="submit" class="btn btn-primary">Next</button>
            </div>
        
            </div>
            <div class="form-group mt-20"> 
                
            </div>
            </div>
            
             
            );
    }
}

export default ExpPupilOrientation;