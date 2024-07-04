import React from "react";
import Button from "../Button/button";
import "./taskForm.css";

function TaskForm() {
  return (
    <form className="task-form">
      <h2>Nouvelle tâche</h2>
      <div className="input_newTask">
        <input type="text" placeholder="Titre" />
        <textarea placeholder="Description"></textarea>
      </div>
      <div className="date_selection">
        <p> Date de fin </p>
        <select>
          <option value="03">03</option>
        </select>
        <select>
          <option value="10">10</option>
        </select>
        <select>
          <option value="2025">2025</option>
        </select>
      </div>
      <div className="priority">
        <p> Priorité </p>
        <label>
          <input type="radio" name="priority" value="Basse" checked readOnly />
          Basse
        </label>
        <label>
          <input type="radio" name="priority" value="Normale" readOnly />
          Normale
        </label>
        <label>
          <input type="radio" name="priority" value="Haute" readOnly />
          Haute
        </label>
      </div>
      <Button text="Enregistrer" />
    </form>
  );
}

export default TaskForm;