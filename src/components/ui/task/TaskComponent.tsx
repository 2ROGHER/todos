import React, { JSX, useEffect, useState } from "react";
import "./Task.scss";
import Task from "../../../models/domain/task.model";

export const TaskComponent = ({
  id,
  title,
  content,
  completed,
  onRemove,
  onCompleted,
  onUpdate,
}: {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  onRemove: (id: string) => void;
  onCompleted: () => void;
  onUpdate: (task: Task) => void;
}): JSX.Element => {
  // Use here the useInput custom hook to dooing
  const [isUdpdate, setIsUpdate] = useState({
    title: false,
    content: false,
  });
  const [updatedTerm, setUpdateTerm] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    setUpdateTerm({ ...updatedTerm, title, content });
  }, []);

  return (
    <section className="task">
      {isUdpdate.title ? (
        <div className="task__header">
          <input
            className="task-input__updated"
            name="title"
            value={updatedTerm.title}
            onChange={(e) =>
              setUpdateTerm({ ...updatedTerm, [e.target.name]: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="task__header">
          <h4
            className="task__title"
            onClick={() =>
              setIsUpdate({ ...isUdpdate, title: !isUdpdate.title })
            }
          >
            {title}
          </h4>
        </div>
      )}

      {isUdpdate.content ? (
        <div className="task__body">
          <input
            className="task-content__updated"
            name="content"
            value={updatedTerm.content}
            onChange={(e) =>
              setUpdateTerm({ ...updatedTerm, [e.target.name]: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="task__body">
          <h4
            className="task__content"
            onClick={() =>
              setIsUpdate({ ...isUdpdate, content: !isUdpdate.content })
            }
          >
            {content}
          </h4>
        </div>
      )}

      <div className="task__actions">
        <button className="task__button__delete" onClick={() => onRemove(id)}>
          x
        </button>
      </div>

      <div className="task__actions">
        <button
          className="task__button__delete"
          onClick={() =>
            onUpdate(
              new Task(
                id,
                updatedTerm.title,
                updatedTerm.content,
                completed,
                false,
                false,
                false
              )
            )
          }
        >
          save changes
        </button>
      </div>
    </section>
  );
};
