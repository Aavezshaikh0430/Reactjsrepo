import React from "react";

class InputForm extends React.Component{
    constructor(props){
        super();
        this.state={
            form:{
                name:"username",
                password:'password'
            }
        }
    }

    handelInput=(value,key)=>{
        let form=this.state.form;
        form[key]=value;
        this.setState=({form})

    }
    handelform

    render(){
        return(
            <div>
                <input name="Username" placeholder="Enter username" type="text" onChange={this.handelInput}/>
                <input name="password" placeholder="Enter password"  type="password" onChange={this.handelInput}/>
                <button>Click</button>
                
            </div>
        )
    }
}
export default InputForm;