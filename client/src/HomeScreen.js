import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class Homescreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            homescreen:[],
            loginmessage:'',
            buttonLabel:'Register',
            isLogin:true
        }
    }
    componentWillMount(){
        var homescreen=[];
        homescreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            homescreen:homescreen,
            loginmessage:loginmessage
        })
    }
    render() {
        return (
            <div className="homescreen">
                {this.state.homescreen}
                <div>
                    {this.state.homescreen}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
    handleClick(event){
        // console.log("event",event);
        var loginmessage;
        if(this.state.isLogin){
            var homescreen=[];
            homescreen.push(<Register parentContext={this}/>);
            loginmessage = "Already registered.Go to Login";
            this.setState({
                homescreen:homescreen,
                loginmessage:loginmessage,
                buttonLabel:"Login",
                isLogin:false
            })
        }
        else{
            var homescreen=[];
            homescreen.push(<Login parentContext={this}/>);
            loginmessage = "Not Registered yet.Go to registration";
            this.setState({
                homescreen:homescreen,
                loginmessage:loginmessage,
                buttonLabel:"Register",
                isLogin:true
            })
        }
    }
}
const style = {
    margin: 15,
};
export default Homescreen;