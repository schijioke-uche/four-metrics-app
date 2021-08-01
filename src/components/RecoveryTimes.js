/* eslint-disable no-unused-vars */
import {  Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";


function RecoveryTimes(props){ 
  const [recoveryDate, setRecoveryDate] = useState(Date);
  const [recoveryTime, setRecoveryTime] = useState("");
  const [recoveryDuration, setRecoveryDuration] = useState("");

  const [error, setError] = useState(false);
  
  
  const handleRecoveryDateSelect = (event) => {
    setRecoveryDate(event.target.value);
  };

  const handleDurationSelect = (event) => {
    setRecoveryDuration(event.target.value);
  };

  //useEffect(()=>{},[props.recovery]);
  console.warn = () => {};
  console.disableYellowBox = true;

  const handleRecoveryTimeSelect = (event) => {
    var timeString = event.target.value;
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? " AM" : " PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    setRecoveryTime(timeString);
  };
  const handleAddRecovery = (e) =>{
    e.preventDefault();    
    setError(!(recoveryTime && recoveryDate && recoveryDuration))
    const newRecovery = {id:props.recovery.length+1, date: recoveryDate, time:recoveryTime, duration: recoveryDuration}
    props.setRecovery([...props.recovery, newRecovery])
};

    return(
        <div className="container background" >
        <div>
                <h3> Recovery Times</h3>
                <table className="recoveryTimesTable" >
                  <thead>
                    <tr>
                      <th className="recoveryTimesTable" scope="col">Start Time</th>
                      <th className="recoveryTimesTable"> Duration (minutes)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.recovery && props.recovery.map((recovery,i)=> (         
                      <tr key={i}>            
                        <td  className="recoveryTimesTable"> {recovery.date}  {recovery.time}</td>
                        <td  className="recoveryDurationTable" >{recovery.duration}</td> 
                      </tr> 
                  ))}             
                       
                  </tbody>
                </table>    
                <form action="/" method="get" id="recoveryForm" onSubmit={handleAddRecovery} >
                <Row>
                  <Col>
                  <label htmlFor="startDate">Start Date</label>
                  <input 
                    required
                    type="date" 
                    className="form-control" 
                    id="startDate" 
                    placeholder="Select Start Date" 
                    onChange={handleRecoveryDateSelect}
                    />
                  </Col>
                  <Col>
                  <label htmlFor="StartTime">Start Time</label>
                  <input 
                    required
                    type="time" 
                    className="form-control" 
                    id="StartTime" 
                    placeholder="Select Start Date" 
                    onChange={handleRecoveryTimeSelect}
                    />
                  </Col>
                  <label htmlFor = "duration" >Duration</label>
                </Row>
                <input 
                  required
                  type="number" 
                  className="form-control" 
                  id="duration" 
                  placeholder="Set Duration"
                  onChange={handleDurationSelect}
                  />
                <button                
                  type="submit" 
                  className="mt-3 mb-3 btn btn-primary"
                  >
                  Add Recovery Time
                  </button>  
                </form>  
            </div>
        </div>
    )

}

export default RecoveryTimes;