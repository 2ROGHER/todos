import React, { JSX, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Task from "../../../models/domain/task.model";
import { IAction } from "../../../models/interfaces/action.interface";
import {
  getAllTasksAction,
  udpateTaskAction,
  removeTaskAction,
} from "../../../redux/actions";
import { TaskComponent } from "../../ui/task/TaskComponent";
import { IState } from "../../../models/interfaces/state.interface";

import "./TasksList.scss";
import { addTaskStatusAction } from "../../../redux/actions/color.actions";
import { TaskStatus } from "../../../enums/task-status.enum";

export const TaskLists = (): JSX.Element => {
  const d = useDispatch<Dispatch<IAction<Task | string>>>();

  // We need to get all [Tasks] when the component is rendered.
  const { todos } = useSelector((state: any) => state);

  useEffect(() => {
    // When the component is mounted fot first time, we need to load all tasks.
    d(getAllTasksAction());
  }, []);

  const handleRemoveTask = (id: string) => {
    d(removeTaskAction(id));
  };

  /**
   * This handler method is used do dispath a action to update the task with the ID
   * @param id Task ID
   */
  const handleUpdateTask = (task: Task) => {
    d(udpateTaskAction(task));
  };

  /**
   * This method allow us to mark if the task is completed or not.
   * @param id The ID of the task to mark completed or not.
   * @param task The task
   */
  const handleCompletedTask = (id: string, task: Task) => {};

  /**
   * This method is used to set the [status] of each task as [favorites]
   * @param id Task ID
   */  

  const toggleSetTaskStatus = (s: string, id: string) => {
    d(addTaskStatusAction(s, id));
  };

  console.log(todos);
  

  return (
    <>
      <div className="tasks-list">
        <h1>Task Lists</h1>
        <div className="tasks-list__content">
          <ul className="tasks-list">
            {todos.length ? (
              todos.map((t: Task) => (
                <li 
                  key={t.id}
                  className="taks-list__item"
                  style={{ listStyleType: "none" }}
                >
                  <TaskComponent
                    {...t}
                    onRemove={handleRemoveTask}
                    onCompleted={() => console.log("completed")}
                    onUpdate={handleUpdateTask}
                    onToggleSetStatus={toggleSetTaskStatus}
                  />
                </li>
              ))
            ) : (
              <h3>Retreiving all task to DB</h3>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
