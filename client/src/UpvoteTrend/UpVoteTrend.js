import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {userActions} from "../_actions";
import { Link } from 'react-router-dom';
const data = [
    {name: 'Monday', views: 4000},
    {name: 'Tuesday', views: 3000},
    {name: 'Webnesday',views: 2000},
    {name: 'Thursday', views: 2780},
    {name: 'Friday', views: 1890},
    {name: 'Saturday', views: 2390},
    {name: 'Sunday', views: 3490},
];

class UpVoteTrend extends React.Component{
    componentDidMount() {
        this.props.dispatch(userActions.getAllVotes());
    }
    render(){
        const {user,votes} = this.props;
        return(
            <div>
                {votes.loading && <em>Loading visualization...</em>}
                {votes.items &&
                <LineChart width={600} height={300} data={votes.items} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <Line type="monotone" dataKey="count" stroke="#8884d8"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey="day"/>
                    <YAxis/>
                    <Tooltip/>
                </LineChart>
                }
                <p>
                    <Link to='/'>Home Page</Link>
                </p>
            </div>);
    }
}
function mapStateToProps(state) {
    const { votes, authentication } = state;
    const { user } = authentication;
    return {
        user,
        votes
    };
}

const connectedUpVoteTrend = connect(mapStateToProps)(UpVoteTrend);
export { connectedUpVoteTrend as UpVoteTrend };