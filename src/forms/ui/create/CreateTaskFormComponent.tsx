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
    <form
      action="#"
      className="form-task__create"
      onSubmit={() => onCreate()}
    >
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

      <div className="button-task__create">
        <button
          className="btn__create"
          type="submit"
          onClick={() => {
            onCreate();
            console.log("exucting form here");
            onHiddeForm(false);
          }}
        >
          <span>add task</span>
        </button>
      </div>
    </form>
  );
};
