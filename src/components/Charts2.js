import React from 'react';
import { connect } from "react-redux";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

function Charts2(props) {
    return (
        <div>
            <h1>Charts2</h1>
            <h2>Count {props.count}</h2>
            <XYPlot width={300} height={300}>
                <HorizontalGridLines />
                <LineSeries
                    data={[
                        {x: 1, y: 20},
                        {x: 2, y: 25},
                        {x: 3, y: 12}
                        ]}/>
                <XAxis />
                <YAxis />
            </XYPlot>    
        </div>
    )
}

const mapStateToProps = state => ({
    count: state.counts.count
  });
export default connect(mapStateToProps)(Charts2);