import React from "react";
import '../style/Counter.css';

class Counter extends React.Component{
    constructor(props){
        super();


        this.state={
            
            count:0

        
        }
        
        //this.handleClick = this.handleClick.bind(this);
    }


handleClick=()=>{
    //console.log('clicked.');
    const count = this.state.count
    this.setState({count:count+1});
    console.log("hello",count+1);
    // if(count<=10){
    //     console.log(this.handleClick);
    // }
}

    render(){
        return(
            <div className="counter">
                <h2>Counter</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>click</button>
            </div>

        )
    }

}

export default Counter;