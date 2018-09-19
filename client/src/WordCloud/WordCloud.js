import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    {name: 'Monday', views: 4000},
    {name: 'Tuesday', views: 3000},
    {name: 'Webnesday',views: 2000},
    {name: 'Thursday', views: 2780},
    {name: 'Friday', views: 1890},
    {name: 'Saturday', views: 2390},
    {name: 'Sunday', views: 3490},
];

class WordCloud extends React.Component{
    render(){
        return(<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="views" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            </LineChart>);
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

const connectedWordCloud = connect(mapStateToProps)(WordCloud);
export { connectedWordCloud as WordCloud };