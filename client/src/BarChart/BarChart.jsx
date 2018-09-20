import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import {Jumbotron, Button} from 'react-bootstrap';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend}from 'recharts';

class BarChart extends React.Component{
    componentDidMount() {
        this.props.dispatch(userActions.getAllTags());
    }
    render() {
        const {user,tags} = this.props;
        return (
            <div>
                <Header/>
                <Jumbotron>
                <h1>Topics of Your Interest</h1>
                
            {tags.loading && <em>Loading visualization...</em>}
                {tags.items &&
                <ComposedChart layout="vertical" width={600} height={400} data={tags.items}
                               margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <CartesianGrid stroke='#f5f5f5'/>
                    <XAxis type="number"/>
                    <YAxis dataKey="key" type="category"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey='value' barSize={20} fill="#8884d8" />
                </ComposedChart>
                
                }
                <p>
                   This visualization displays your top 5 topics which you frequent check on Stackoverflow.
                </p>
                <h2>Patterns </h2>
                <ul>
                    <li>Top topics revolves over Same programming language you use on daily basis.</li>
                    <li>Subtopics of a language gave insights about your weak points in that language. </li>
                    <li>Top topics visited can also correalte to topics you write answers to </li>
                </ul>
                <p>The topics which dispaly here which are adaptive to each person gives a very important information about a person's programming interest.</p>
                <br></br>
               
                </Jumbotron>
                
               
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