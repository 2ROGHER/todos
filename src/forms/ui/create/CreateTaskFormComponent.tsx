import { title } from "process";
import React, { JSX, useState } from "react";

/**
 * This component is responsible to render the create New Todo From component.
 */

// React.Dispatch<React.SetStateAction<{ title: string; content: string }>>
export const CreateTaskFormComponent = ({
  i,
  onCreate,
  onSetV,
}: {
  i: { title: string; content: string };
  onCreate: (e: any) => void;
  onSetV: (k: string, v: any) => void; // We need to have careful defining the functions.
}): JSX.Element => {
  return (
    <form action="#" className="form" onSubmit={(e) => onCreate(e)}>
      <div className="form-title">
        <input
          className="form-title__input"
          type="text"
          name="title"
          value={i.title} // This is useful to control the input fields.
          onChange={(e) => onSetV(e.target.name, e.target.value)}
          placeholder="Title"
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

      <div className="form-submit">
        <button
          className="form-submit__button"
          type="submit"
          onClick={onCreate}
        >
          <span>add task</span>
        </button>
      </div>
    </form>
  );
};
