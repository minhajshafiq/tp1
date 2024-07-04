import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import Button from "../Button/button";
import "./taskList.css";

function TaskList() {
  return (
    <div className="task_list">
      <TaskItem text="Faire les courses du mois" checked={true} />
      <TaskItem text="Partir chez le médecin" checked={false} />
      <p className="task_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
      <Button text="Supprimer" />
    </div>
  );
}

export default TaskList;