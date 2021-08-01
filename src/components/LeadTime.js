/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function LeadTime (){

    const [leadTime, setLeadTime] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    
     
    console.warn = () => {};
    console.disableYellowBox = true;

    
    const handleInput = () => {
        setErrorMessage("");
    }

    const handleSetLeadTime = () => {
        if (document.getElementById("leadTime").value === "") {
            setErrorMessage("The field is required");
        } 
        
        if (document.getElementById("leadTime").value !== "") {  
            if(document.getElementById("leadTime").value > 0) {
                setLeadTime(document.getElementById("leadTime").value);
                localStorage.setItem("leadTime",document.getElementById("leadTime").value);
            } else {
                document.getElementById("leadTime").value = "";
            }
        } 
    }   

    return (
        <div className="container background" style={{height:'38vh'}}>
        <div>
            <form action="/" method="get" id="leadForm"  onSubmit={handleSetLeadTime}>
                <h3> Lead Time</h3>
                <span>From code pushed to code deployed: { (localStorage.getItem("leadTime") === null) ? '0 minute' : (localStorage.getItem("leadTime") > 1 ? (localStorage.getItem("leadTime") + ' minutes') : (localStorage.getItem("leadTime") + ' minute')) }</span>
                <br></br>
                <label htmlFor="leadTime" className="mt-3">Change Lead Time (in minutes)</label>
                <input type="number" required="required" className="form-control" id="leadTime" placeholder="Set Lead Time" min="0" max="100" onChange={handleInput}/>
                <label style={{color: "red"}}>{errorMessage}</label>
                <br></br>
                <button type="submit" className="mt-3 btn btn-primary" >Update Lead Time</button>
              </form>
            </div>
        </div> 
    )
};
