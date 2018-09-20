import React from 'react';
import { connect } from 'react-redux';
import {HeatMap} from '../HeatMap';
import {BarChart} from '../BarChart';
import {WordCloud} from '../WordCloud';
import  {UpVoteTrend} from "../UpvoteTrend";
import Cookies from "universal-cookie";
class Vis extends React.Component {

    render(){
        return (
            <div>
                <HeatMap />
                <UpVoteTrend/>
            <BarChart/>

    </div>
        );
    }
}
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedVis = connect(mapStateToProps)(Vis);
export { connectedVis as Vis };