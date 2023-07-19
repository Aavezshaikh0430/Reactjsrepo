import React from "react";

class Formhandel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            form:{
            Username: null,
            password:null,
        },
        // error:"",

        }
    }

   
    
    // handleInput = (value, key) => {
    //     let form = this.state.form;
    //     form[key] = value;
    //     this.setState({form});
    //   }


    //   handelForm=()=>{
    //     const isvalidated = this.validate()
    //     console.log(this.state);
    //     if (isvalidated){
    //         console.log('form submited')

    //     }
    //     else{
    //         console.log('form not submited')
    //     }

    //   }



    render(){
        return(
            <div>
               <input name="Username" placeholder="Enter username" onChange={(data)=>this.handelInput(data.target.value,'Username')} type="text"/>
               <input name="password" placeholder="Enter password" onChange={(data)=>this.handelInput(data.target.value,'password')}  type="password"/>
               <button> click </button>
            </div>
        )
    }

}
export default Formhandel;








