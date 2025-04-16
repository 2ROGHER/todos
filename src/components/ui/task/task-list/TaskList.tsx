import React, { JSX, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Task from "../../../../models/domain/task.model";
import { IAction } from "../../../../models/interfaces/action.interface";
import { udpateTaskAction, removeTaskAction } from "../../../../redux/actions";
import { TaskComponent } from "../TaskComponent";
import { IState } from "../../../../models/interfaces/state.interface";

import "./TasksList.scss";
import { addTaskStatusAction } from "../../../../redux/actions/task.actions";
import { TaskStatus } from "../../../../enums/task-status.enum";
import { selectedFilteredTasks } from "../../../../redux/selectors/filter.selector";
import { setFilterValueAction } from "../../../../redux/actions/filters.actions";

export const TaskLists = ({ status = TaskStatus.PENDING}): JSX.Element => {
  const d = useDispatch<Dispatch<IAction<Task | string>>>();

  // We need to get all [Tasks] when the component is rendered.
  const todos = useSelector(selectedFilteredTasks);

  useEffect(() => {
    // When the component is mounted fot first time, we need to load all tasks.
    // d(getAllTasksAction());
    // 1. Here we need to make a [dispatch] to [store] to get all [tasks] from the [store] filtered by ["ALL"]
    // [status]
    // d(getAllTasksAction());
    // d(setFilterValueAction(TaskStatus.DEFAULT)); // Dispatched when all tasks has a [ALL] status
  }, []);

  /**
   * This handler method is used do dispath a action to update the task with the ID
   * @param id Task ID
   */
  const handleUpdateTask = (task: Task) => {
    // d(udpateTaskAction(task));
  };

  /**
   * This method allow us to mark if the task is completed or not.
   * @param id The ID of the task to mark completed or not.
   * @param task The task
   */
  const handleCompletedTask = (id: string, task: Task) => { };

  /**
   * This method is used to set the [status] of each task as [favorites]
   * @param id Task ID
   */

  const handleSetStatus = (s: string, id: string) => {
    // d(addTaskStatusAction(s, id)); // {id: ID, status: DELETED}
  };

  // const handleRemoveTask = (id: string) => {
  //   d(addTaskStatusAction(TaskStatus.DELETED, id));
  //   d(removeTaskAction(id));
  // };

  return (
    <div className="tasks-list__content">
      <ul className="tasks-list">
        {/* {todos ? (
          todos.map((t: Task) => t.status == TaskStatus.PENDING ?  (
            <li
              key={t.id}
              className="taks-list__item"
              style={{ listStyleType: "none" }}
            >
              <TaskComponent
                {...t}
                // onRemove={handleRemoveTask}
                // onCompleted={() => console.log("completed")}
                onUpdate={handleUpdateTask}
                onSetStatus={handleSetStatus}
              />
            </li>
          ): )
        ) : (
          <h3>Retreiving all task to DB</h3>
        )} */}


        {
          todos && (
            todos.filter((t: Task) => t.status === status)
            .map((t: Task, i) => (
              <li key={i}>
                <TaskComponent
                  _id={t.id}
                  _title={t.title}
                  _content={t.content}
                  _status={t.status}
                  _createdAt={t.createdAt}
                  _updatedAt={t.updatedAt}
                  onUpdate={handleUpdateTask}
                  onSetStatus={handleSetStatus}
                />
              </li>
            ))
          )
        }
      </ul>
    </div>
  );
};