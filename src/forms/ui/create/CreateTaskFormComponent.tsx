import { title } from "process";
import React, { JSX, useState } from "react";
import "./CreateTaskForm.scss";

/**
 * This component is responsible to render the create New Todo From component.
 */

// React.Dispatch<React.SetStateAction<{ title: string; content: string }>>
export const CreateTaskFormComponent = ({
  i,
  onCreate,
  onSetV,
  onHiddeForm,
}: {
  i: { title: string; content: string };
  onCreate: () => void;
  onSetV: (k: string, v: any) => void; // We need to have careful defining the functions.
  onHiddeForm: (e: boolean) => void;
}): JSX.Element => {
  return (
    <form action="#" className="form-task__create" onSubmit={() => onCreate()}>
      <div className="form-title">
        <input
          className="form-title__input"
          type="text"
          name="title"
          value={i.title} // This is useful to control the input fields.
          onChange={(e) => onSetV(e.target.name, e.target.value)}
          placeholder="Task title"
        />
      </div>

      <div className="form-content">
        <input
          className="form-content_input"
          type="text"
          name="content"
          value={i.content}
          onChange={(e) => onSetV(e.target.name, e.target.value)}
          placeholder="Add task content"
        />
      </div>

      <div className="form-footer">
        <div className="form-color__list">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#fffafa"
              fill="none"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M8 12.5L10.5 15L16 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="form-color__add">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#fffafa"
              fill="none"
            >
              <path
                d="M10 4C10 2.89543 10.8954 2 12 2H13C14.1046 2 15 2.89543 15 4V6.55337C15 7.86603 15.8534 9.02626 17.1065 9.41722L17.8935 9.66278C19.1466 10.0537 20 11.214 20 12.5266V14C20 14.5523 19.5523 15 19 15H6C5.44772 15 5 14.5523 5 14V12.5266C5 11.214 5.85339 10.0537 7.10648 9.66278L7.89352 9.41722C9.14661 9.02626 10 7.86603 10 6.55337V4Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M6.00217 15C6.15797 16.3082 5.4957 19.5132 4 21.8679C4 21.8679 14.2924 23.0594 15.6851 17.9434V19.8712C15.6851 20.8125 15.6851 21.2831 15.9783 21.5755C16.5421 22.1377 19.1891 22.1531 19.7538 21.5521C20.0504 21.2363 20.0207 20.7819 19.9611 19.8731C19.8629 18.3746 19.5932 16.4558 18.8523 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="button-task__create">
          <button
            className="btn__create"
            type="submit"
            onClick={() => {
              onCreate();
              onHiddeForm(false);
            }}
          >
            <span id="btn-text">add task</span>
          </button>
        </div>
      </div>
    </form>
  );
};
