/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../styles/deployment.css";

function Deployment(props) {
  const [frequencyCount, setFrequencyCount] = useState(0);

  const [deploymentDate, setDeploymentDate] = useState(Date);
  const [deploymentTime, setDeploymentTime] = useState("");


  useEffect(()=>{
    setFrequencyCount(calculateWeeklyFrequency)
  }, [props.deployments])
 
  console.warn = () => {};
  console.disableYellowBox = true;

  //Deployment Date handle
  const handleDeploymentDateSelect = (event) => {
    setDeploymentDate(event.target.value);
  };
  //Deployment Time handle
  const handleDeploymentTimeSelect = (event) => {
    var timeString = event.target.value;
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? " AM" : " PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    setDeploymentTime(timeString);
  };

  const handleAddDeployment = () => {
    const newDeployment = {
      id: props.deployments.length + 1,
      date: deploymentDate,
      time: deploymentTime,
    };
    props.setDeployments([...props.deployments, newDeployment]);
    
  };

  const calculateWeeklyFrequency = ()=> {
      
      const earliestDeployment = new Date(Math.min.apply(null, props.deployments && props.deployments.map(function(e) {
        return new Date(e.date);
      })));
      const latestDeployment = new Date(Math.max.apply(null, props.deployments && props.deployments.map(function(e) {
        return new Date(e.date);
      })));
      const totalWeeksDifference = Math.ceil((latestDeployment - earliestDeployment+1) / ((1000 * 60 * 60 * 24 * 7)))
      const frequency = props.deployments && (props.deployments.length > 1 ? (Math.round((props.deployments && props.deployments.length/totalWeeksDifference) * 10) / 10) : props.deployments.length)
      return frequency ? frequency : 0;
  }


  return (
    <div className="container background">
      <form action="/" method="get" id="deploymentForm"  onSubmit={handleAddDeployment}>
      <div id="frequency">
        <h3>Deployments</h3>
        <label htmlFor="frequency" style={{marginTop: '2px', marginRight: '4px'}}>Frequency: </label>
        <span className="ml-2" id="frequency" style={{fontWeight:'bold'}}>{frequencyCount}/week</span>
        <br></br>
        <ul className="frequency-list ml-1">
        {props.deployments && props.deployments.map((deployment, index) => {
          return <li key={index+"li"}>
            {index+1}. {deployment.date} {deployment.time}
          </li>
        
        })}
        </ul>
        <label htmlFor="deploymentDate" style={{marginTop: "2px"}}>Deployment Date</label>
        <input
          required
          type="date"
          className="form-control"
          id="deploymentDate"
          placeholder="Select Deployment Date"
          onChange={handleDeploymentDateSelect}
        />

        <label htmlFor="deploymentTime" style={{marginTop: "10px"}}>Deployment Time</label>
        <input
          required
          type="time"
          className="form-control"
          id="deploymentTime"
          placeholder="Select Deployment Time"
          onChange={handleDeploymentTimeSelect}
        />
        <button
          disabled={!(deploymentDate && deploymentTime)}
          type="submit"
          className="mt-3 mb-3 btn btn-primary"
        >
          Add Deployment
        </button>
      </div>
      </form>
    </div>
  );
}
export default Deployment;
