import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Header } from '../Header/Header';
class TimeDispaly extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            newdate: null
        };
    }
    render(){
        var newD = new Date(this.value);
        this.setState({mewdate:newD});
        return (
            <ul>{this.state.newdate}</ul>
        )
    }

}

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
    render() {
        const { user, users } = this.props;
        return (
            <div>
            <Header/>
            <div className="col-md-12">
            
                <h1>Hi {user.firstName}!</h1>
                <p>Welcome! </p>
                <h3>Your Login History: </h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((login, index) =>
                            <li key={login._id}>
                                <ul>{login.time}</ul>
                                {/*<TimeDispaly value = {login.time}/>*/}
                            </li>
                        )}
                    </ul>
                }
                <h3>Events Logged:</h3>
                <ul>
                    <li>Tags(Topics) you visited. <ul><li>Reasons: To know what topics you would be more interested in.</li></ul></li>
                    <li>Number of visits to Stack Overflow.<ul><li> Reasons: To find patterns in your work time and at ehat time are most stuck.</li></ul></li>
                    <li>Number of Upvotes.<ul><li> Reason: Apperciation to pay to fellow community.</li></ul></li>
                    <li>Number of Downvotes. <ul><li>Reason: to filter out bad questions and answers.</li></ul> </li>
                    <li>Questions clicked. <ul><li>Reason: To understand what questions which are dispalyed as a suggestion is important to you.</li></ul> </li>
                </ul>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users,authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };