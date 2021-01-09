/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
import React from 'react'
import './Mainpage.css'

class Mainpage extends React.Component {
    
    // Constructor, initialize state and bind functions
    constructor() {
        super();
        this.state = {
            input : {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    //Setting path after clicking on login after validation
    nextPath(path) {
        this.props.history.push(path);
    }
    
    // Updating state on every change in input field
    handleChange(event){
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
        this.valid = this.validate();
    }
    
    // Handling Submit and clearing error if validation is successful
    handleSubmit(event) {
        event.preventDefault();
        
        if(this.validate){
            let input = {};
            input["email"]="";
            input["password"]="";
            this.setState({input:input});
        }
    }
    
    // this function validate email and password and update state.error accordingly
    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
        
        if(!input["email"]){
            isValid = false;
            errors["email"] = "Please enter email address";
        }
        if(typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }
        if(!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password";
        }
        if(typeof input["password"] !== "undefined"){
            isValid = false;
            if( input["password"].length < 8 ){
                errors["password"] = "Password must be at least 8 characters";
            }else{
                const re = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
                const isOk = re.test(input["password"]);
                if(!isOk){
                    errors["password"] = "Password must contain a capital letter, a small letter, a special character and a number.";
                }else{
                    errors["password"] = "";
                    isValid = true;
                }
            }
        }
        this.setState({
            errors : errors
        })
        return isValid;
    }
    
    render(){
        return (
        <div className="Login container">
            <div className='m-5'>
                <h1>ADCURATIO</h1>
            </div>
            
            <form onSubmit={this.handleSubmit}>
            <div className="form-group shadow p-5 login-form">
            
            <h3 className="text-center mb-4">LOGIN</h3>

            <div className='mb-3'>
                <label className="form-label">E-mail</label>
                <input className="form-control" type="text" placeholder="Enter email"
                    name="email"
                    value={this.state.input.email}
                    onChange={this.handleChange}
                    id="email"
                    autoFocus
                 />
                 <div className='text-danger'>{this.state.errors.email}</div>
            </div>
            
            <div className='mb-3'>
                <label className="form-label">Password</label>
                <input className="form-control" type="password" placeholder="Password"
                    name="password"
                    value = {this.state.input.password}
                    onChange={this.handleChange}
                 />
                 <div className="text-danger">{this.state.errors.password}</div>
            </div>
            
            <div className='mb-3 mt-4'>
                    <button type="submit" className="form-control btn btn-success"
                        onClick={() => {if(this.valid)this.nextPath('/user')} } 
                    >Login</button>
            </div>
            
            </div>
            </form>
            
            <div className='float-right m-5'>
                <p className="font-italic" > - by Rishabh Gupta</p>
            </div>
            
        </div>
        )
    }
}

export default Mainpage;