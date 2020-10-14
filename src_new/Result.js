import React from 'react';
import ReactWordcloud from 'react-wordcloud';

class Result extends React.Component {
    constructor(props){
        super()
        this.state = {}
    }

    exitExperiment = (event) => {
        event.preventDefault();
        event.target.classList.add("was-validated");
        if(event.target.checkValidity() === false){ 
            return;
        }
        this.props.callbackFromParent();
        this.props.history.push('/')
    }
    

    render() {
        const expObject = this.props.expObject
        let val = JSON.stringify(expObject);
    return (
        <div>
            <div className="jumbotron text-center" >
                {val}
            </div>
                
                
              
            <div className="jumbotron text-center" style={{backgroundColor: 'white'}}>
                <button  onClick={(e) => this.exitExperiment(e)} type="submit" class="btn btn-primary">Exit</button>  
            </div>

        </div>
        
    );
    }
}

export default Result;