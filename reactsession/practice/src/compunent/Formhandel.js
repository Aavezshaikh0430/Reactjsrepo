import React from "react";

class Formhandel extends React.Component{
    constructor(props) {
        super(props);
    
    
        this.state = {
          form: {
            username: null,
            password: null
          },
          error: ''
        }
      }
    
      validate() {
        let form = this.state.form;
        
        if (!form.username) {
          this.setState({'error': 'Enter Username'})
          return false;
        } 
    
        if (!form.password) {
          this.setState({'error': 'Enter Password'})
    
          return false;
        }
    
        if (form.password.length < 8) {
          this.setState({'error': 'Password should be greater than or equal to 8 '})
    
          return false;
        }
        
        
        return true;
      }
    
      handleInput = (value, key) => {
        let form = this.state.form;
        form[key] = value;
        this.setState({form});
      }
    
      handleForm = (e) =>  {
        const isValidated = this.validate()
        console.log(this.state);


        e.preventDefault();
        console.log("fname:" ,this.state.username)
        console.log("password:" ,this.state.password)
    
        if (isValidated){
          console.log('form submitted');
        } else {
          console.log('form not submitted')
        }
      }
    
    
      render() {
        const {error} = this.state;
        return (
          <div>
            <input
              name="Username"
              placeholder="Enter Username"
              onChange={(data) => this.handleInput(data.target.value, "username")}
            />
    
            <input
              name="Password"
              type="password"
              placeholder="Enter Password"
              onChange={(data) => this.handleInput(data.target.value, "password")}
            />
    
            
            
            <button onClick={this.handleForm}>Submit</button>
            {
              error ?  (<h4>{error}</h4>) : (<></>)
            }
          </div>
        );
      }

}
export default Formhandel;