import React from "react";
import Button from "../Button/button";
import "./taskForm.css";

function TaskForm() {
  const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthsArray = Array.from({ length: 12 }, (_, i) => i + 1);
  const yearsArray = Array.from({ length: 26 }, (_, i) => 2025 + i);
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
          {daysArray.map(day => (
            <option key={day} value={String(day).padStart(2, '0')}>
              {String(day).padStart(2, '0')}
            </option>
          ))}
        </select>
        <select>
        {monthsArray.map(months => (
            <option key={months} value={String(months).padStart(2, '0')}>
              {String(months).padStart(2, '0')}
            </option>
          ))}
        </select>
        <select>
        {yearsArray.map(years => (
            <option key={years} value={String(years).padStart(2, '0')}>
              {String(years).padStart(2, '0')}
            </option>
          ))}
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