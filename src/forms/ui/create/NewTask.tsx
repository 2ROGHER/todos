import React, { JSX } from "react";
import { useInput } from "../../../hooks/useInput.hook";

/**
 * This component is responsible to render the create New Todo From component.
 */

// React.Dispatch<React.SetStateAction<{ title: string; content: string }>>
export const NewTodoForm = ({
  onSubmit,
  onCreate,
  onSetFields,
  fields,
}: {
  onSubmit: (e: any) => void;
  onCreate: () => void;
  onSetFields: any;
  fields: { title: string; content: string };
}): JSX.Element => {

  
  return (
    <form action="#" className="form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-title">
        <input
          className="form-title__input"
          type="text"
          name="title"
          onChange={(e) =>
            onSetFields({ ...fields, [e.target.name]: e.target.value })
          }
          placeholder="Title"
        />
      </div>

      <div className="form-content">
        <input
          className="form-content_input"
          type="text"
          name="content"
          onChange={(e) =>
            onSetFields({ ...fields, [e.target.name]: e.target.value })
          }
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
