import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import {userActions} from "../_actions";

class HeatMap extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAllViews());
    }
   render(){
       const {user,views} = this.props;
        return(
       <div>
           {views.loading && <em>Loading visualization...</em>}
           {views.items &&
           <Plot
               data={[views.items]}
               layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
           />
           }
               </div>
           );
   }
}
function mapStateToProps(state) {
    const { views, authentication } = state;
    const { user } = authentication;
    return {
        user,
        views
    };
}

const connectedHeatMap = connect(mapStateToProps)(HeatMap);
export { connectedHeatMap as HeatMap };