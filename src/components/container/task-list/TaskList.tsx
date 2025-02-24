import React, { JSX, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Task from "../../../models/domain/task.model";
import { IAction } from "../../../models/interfaces/action.interface";
import { getAllTasksAction, removeTaskAction, udpateTaskAction } from "../../../redux/actions";
import { TaskComponent } from "../../ui/task/Task";
import { IState } from "../../../models/interfaces/state.interface";

export const TaskLists = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch<IAction<Task | string>>>();

  const { todos } = useSelector((state: any) => state.todos);
  const { filtered } = useSelector((state: any) => state.todos);

  useEffect(() => {
    // When the component is mounted fot first time, we need to load all tasks.
    dispatch(getAllTasksAction());
  }, []);

  const handleRemoveTask = (id: string) => {
    dispatch(removeTaskAction(id));
  }
  /**
   * This method allow us to mark if the task is completed or not.
   * @param id The ID of the task to mark completed or not.
   * @param task The task
   */
  const handleCompletedTask = (id: string, task: Task) => {

  }

  /**
   * This handler method is used do dispath a action to update the task with the ID
   * @param id Task ID
   */
  const handleUpdateTask = (task: Task) => {
    console.log(task);
    dispatch(udpateTaskAction(task));
  }


  return (
    <>
      <div className="task-lists">
        <h1>Task Lists</h1>
        <div className="task-list-content">
          <ul className="task-list">
            {todos.length ? (
              todos.map((task: Task) => (
                <li
                  className="taks-list__item"
                  style={{ listStyleType: "none" }}
                >
                  <TaskComponent
                    id={task.id}
                    key={task.id}
                    title={task.title}
                    content={task.content}
                    completed={task.completed}
                    onRemove={handleRemoveTask}
                    onCompleted={() => console.log("completed")}
                    onUpdate={handleUpdateTask}
                  />
                </li>
              ))
            ) : (
              <h3>Retreiving all task to DB</h3>
            )}
          </ul>
        </div>
      </div>

      <div className="task-lists">
        <h1>Task Lists</h1>
        <div className="task-list-content">
          <ul className="task-list">
            {filtered.length ? (
              filtered.map((task: Task) => (
                <li
                  className="taks-list__item"
                  style={{ listStyleType: "none" }}
                >
                  <TaskComponent
                    id={task.id}
                    key={task.id}
                    title={task.title}
                    content={task.content}
                    completed={task.completed}
                    onRemove={handleRemoveTask}
                    onCompleted={() => console.log("completed")}
                    onUpdate={handleUpdateTask}
                  />
                </li>
              ))
            ) : (
              <h3>Task by filter are empty</h3>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
