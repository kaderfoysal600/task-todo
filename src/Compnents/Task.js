import React, { useState } from "react";

export default function Task() {
  const [taskNumber, setTaskNumber] = useState("");

  const handleChange = (e) => {
    setTaskNumber(e.target.value);
  };
  return (
    <div>
      <label>Date</label>
      <input type="date" />
      <input
        name="task-number"
        value={taskNumber}
        placeholder="Enter Task-Number"
        onChange={handleChange}
      ></input>
      <input name="action" type="text" placeholder="Enter Action"></input>
      <input name="duration" placeholder="Duration"></input>
      <button className="btn btn-primary">Submit</button>
    </div>
    
  );
}
