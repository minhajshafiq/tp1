import React, { useState } from "react";
import "./taskItem.css";

function TaskItem({ text, checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="task_item">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <p className="task_itemText">{text}</p>
    </div>
  );
}

export default TaskItem;