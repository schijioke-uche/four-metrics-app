/* eslint-disable no-unused-vars */
import { useState } from "react";
import { PropTypes } from 'prop-types';

function ChangeFailRate (props){

    //round up
    const roundToOneDecimal = (realNumber) => {
        return Math.round(realNumber * 10) / 10
    }

    console.warn = () => {};
    console.disableYellowBox = true;
  
    //render
    return (
        <div className="container background" style={{height:'38vh'}}>
        <div>
        <form action="/" method="get" id="FailForm">
                <h3>Change Fail Rate</h3>
                <span className='mt-3'>Change Fail Rate:</span>   
                <span style={{fontWeight:'bold'}}> {roundToOneDecimal(props.failRate)}%</span>
        </form>
            </div>
        </div>
    )

};


export default ChangeFailRate;