import React, { Component } from 'react';
import ai_image from './images/abstract_ai.jpg'
import ExpObject from './ExpObject'
import EmotionObject from './EmotionObject'

    class ViewOrder extends React.Component {
        constructor(props) {
            super();
            this.state = {};
        }


    render() {
        const counter = this.props.counter;
        //{order.map(name => <li key = {name}> {} , <u>kr</u></li>)}
        return (
        
            <div  className="jumbotron text-center">
                <div  class="p-3 mb-2 bg-info text-white" style={{backgroundImage: `url(${ai_image}` }}>
                    <form onSubmit={this.handleSubmit}>
                        <div class="container">

                            <div>
                                  <h3>Experiment DATA</h3>
                            </div>

                            <div>
                            <ol class="list-group">
                                
                            </ol>
                            <br></br>
                            <button class="btn btn-light btn-rounded" type= "submit">Påbörja ett nytt experiment</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    }
    export default ViewOrder;