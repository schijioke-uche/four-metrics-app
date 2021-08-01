/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Deployment from "./components/Deployment";
import Recovery from "./components/RecoveryTimes";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LeadTime from "./components/LeadTime";
import ChangeFailRate from "./components/ChangeFailRate";
import { useState, useEffect } from "react";
import { PropTypes } from 'prop-types';

function App() {
  const localStorageDeployments = JSON.parse(
    localStorage.getItem("deployments") 
  ) ? JSON.parse(
    localStorage.getItem("deployments")
  ) : [];

  const localStorageRecovery = JSON.parse(
    localStorage.getItem("recovery")
  ) ? JSON.parse(
    localStorage.getItem("recovery")
  ) : [];
  const [deployments, setDeployments] = useState(localStorageDeployments);
  const [recovery, setRecovery] = useState(localStorageRecovery);
  const [failRate, setFailRate] = useState(0);

  const isFailureRate = () => {
    const isNull = JSON.stringify(failRate);
    if(!(failRate) && isNaN(failRate)){
        return 0; 
    }
    else if(!(failRate) && Number.isFinite(failRate)){
      return 0; 
   }
    else if(!(failRate) && (failRate) === "Infinity"){
      return 0; 
   }
   else if(isNull === "null"){
    return 0; 
 }
    else{
        return failRate;
    }
 }

    let failureArr  = isFailureRate()
    //console.log(failureArr)
    

    console.warn = () => {};
    console.disableYellowBox = true;

  useEffect(() => {
    computeFailRate();
    localStorage.setItem("deployments", JSON.stringify(deployments));
  }, [deployments]);

  useEffect(() => {
    computeFailRecovery();
    localStorage.setItem("recovery", JSON.stringify(recovery));
  }, [recovery]);

  const computeFailRate = () => {
     //deployments && setFailRate(recoveries.length/deployments.length);
    //Recovery TIme component needs to be working for this to display value otherwise, it stays as zero (0).
    //Percentage formula: P = Y/X * 100, where P is the percentage formula.
    var fRate = recovery.length / deployments.length;
    deployments && setFailRate(fRate * 100);  //get the percentage.
  };

  const computeFailRecovery = () => {
    var rRate = recovery.length / deployments.length;
    recovery && setFailRate(rRate * 100); //get the percentage.
  };

  return (
    <div className="m-3 p-3">
      <div style={{marginTop: '2px', backgroundColor: '#575454', color: 'white', marginRight: '40px', marginLeft: '40px', textAlign: 'center'}}>
        <span style={{ marginRight: '40%', marginLeft: '40%', width: '100%', textAlign: 'center'}}>
        Software Delivery Performance Metrics
      </span>
     </div>
      <Row className="m-3 p-3">
        <Col>
          <Deployment
            deployments={localStorageDeployments}
            setDeployments={setDeployments}
          />
        </Col>
        <Col>
          <Recovery 
            recovery={localStorageRecovery}
            setRecovery={setRecovery}          
          />
        </Col>
      </Row>
      <Row className="m-3 p-3">
        <Col>
          <LeadTime />
        </Col>
        <Col>
          <ChangeFailRate 
          failRate={failureArr} 
          />
        </Col>
      </Row>
      <p style={{ width: '100%', textAlign: 'center' }}>Copyright IBM &copy; 2021 <br/>All Rights Reserved</p>
      <p style={{ width: '100%', textAlign: 'center' }}>Jeffrey ReactJS Test Application</p>
    </div>
  );
}

ChangeFailRate.propTypes = {
  failRate:PropTypes.number,
}


export default App;
