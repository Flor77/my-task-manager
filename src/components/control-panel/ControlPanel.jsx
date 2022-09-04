import React from "react";
import "./ControlPanel.css";
import Modal from "../modal/Modal";
import CreateTaskForm from "../forms/CreateTaskForm";
import TaskFilter from "../task-filter/TaskFilter";

const ControlPanel = (props) => {
  const { isOpen, setIsOpen, onNewTaskAdd, taskList } = props;

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOnNewTaskAdd = (task) => {
    onNewTaskAdd(task);
    closeModal();
  };

  return (
    <div className="control-panel-container">
      <div className="task-details-row">
        <div>
          <h3 className="view-title">Tasks</h3>
          <p className="subtitle">Your tasks in your space.</p>
        </div>
        {taskList.length > 0 && (
          <button onClick={openModal} className="button-primary btn-md">
            Create Task
          </button>
        )}
      </div>
      <div>
        <TaskFilter />
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <h3>Create task</h3>
        <CreateTaskForm addNewTask={handleOnNewTaskAdd} />
      </Modal>
    </div>
  );
};

export default ControlPanel;
