import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';

class HeatMap extends React.Component {
   render(){
       return(
   <Plot
       data = {[
           {
               z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
               x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
               y: ['Morning', 'Afternoon', 'Evening'],
               type: 'heatmap'
           }
       ]}
       layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
       />)
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

const connectedHeatMap = connect(mapStateToProps)(HeatMap);
export { connectedHeatMap as HeatMap };