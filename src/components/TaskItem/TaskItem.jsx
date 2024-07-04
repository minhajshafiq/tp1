import React from "react";
import "./taskItem.css";

function TaskItem({ text, checked }) {
  return (
    <div className="task_item">
      <input type="checkbox" checked={checked} readOnly />
      <p className='task_itemText'>{text}</p>
    </div>
  );
}

export default TaskItem;