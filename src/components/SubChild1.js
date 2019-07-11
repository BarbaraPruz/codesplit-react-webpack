import React from 'react';
import { connect } from "react-redux";

function SubChild1(props) {
    return (
        <div>
            <h1>SubChild1</h1> 
            <h2>Count {props.count}</h2>
            <button onClick={()=>props.increment()}>Inc</button> 
        </div>
    )
}

const mapStateToProps = state => ({
    count: state.counts.count
  });
  
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: "INCREMENT"}),
  });  
export default connect(mapStateToProps,mapDispatchToProps)(SubChild1);