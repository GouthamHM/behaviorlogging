import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend}from 'recharts';
const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
    {name: 'Page B', uv: 868, pv: 967, amt: 1506},
    {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
    {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
    {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
    {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

class BarChart extends React.Component{
    componentDidMount() {
        this.props.dispatch(userActions.getAllTags());
    }
    render() {
        debugger;
        const {user,tags} = this.props;
        console.log(tags);
        return (
            <div>
            {tags.loading && <em>Loading visualization...</em>}
                {tags.items &&
                <ComposedChart layout="vertical" width={600} height={400} data={tags.items}
                               margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <CartesianGrid stroke='#f5f5f5'/>
                    <XAxis type="number"/>
                    <YAxis dataKey="key" type="category"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey='value' barSize={20} fill='#413ea0'/>
                </ComposedChart>
                }
            </div>
        );
    }

}
function mapStateToProps(state) {
    const { tags, authentication } = state;
    const { user } = authentication;
    return {
        user,
        tags
    };
}

const connectedBarChart = connect(mapStateToProps)(BarChart);
export { connectedBarChart as BarChart };