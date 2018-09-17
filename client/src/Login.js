import React, { Component } from 'react';
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Login extends  Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }
    render(){
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <Appbar title = "Login"/>
                            <TextField
                            hintText = "Enter your email id"
                            floatingLabelText="email"
                            onChange={(event,newValue)=> this.setState({email:newValue}) }/>
                            <br/>
                            <TextField
                                hintText = "Enter your password"
                                floatingLabelText="Password"
                                onChange={(event,newValue)=> this.setState({password:newValue}) }/>
                            <br/>
                            <RaisedButton label ="Submit"
                                          primary ={true}
                                          style = {style}
                                          onClick={(event) => this.handleClick(event)} />
                        </div>
                    </MuiThemeProvider>
                </div>
            )
        }

    handleClick(event){
        var apiBaseUrl = " http://localhost:3000/api/auth/";
        var self = this;
        var payload = {
            "email":this.state.email,
            "password": this.state.password
        };
        axios.post(apiBaseUrl+'login',payload).then(function (resp){
           if( resp.data.code === 200){
            //To Do redirect to After login Page
           }
           else{
               console.log("Failed Login");
           }
        });
    }
}
const style = {
    margin: 15,
};
export default Login;