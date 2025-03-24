import React, { JSX, useEffect, useState } from "react";
import "./Task.scss";
import Task from "../../../models/domain/task.model";
import { TaskStatus } from "../../../enums/task-status.enum";
import DropdownMenu from "../../utils/drop-down/DropdownMenu";
import { useInput } from "../../../hooks";

export const TaskComponent = ({
  _id,
  _title,
  _content,
  _status,
  _createdAt,
  _updatedAt,
  onRemove,
  onCompleted,
  onUpdate,
  onToggleSetStatus,
}: {
  _id: string;
  _title: string;
  _content: string;
  _status: string;
  _createdAt: string;
  _updatedAt: string;

  onRemove: (id: string) => void;
  onCompleted: () => void;
  onUpdate: (task: Task) => void;
  onToggleSetStatus: (s: string, id: string) => void;
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

  const { i, memoizedChangeV, _ } = useInput({});

  useEffect(() => {
    setUpdateTerm({ ...updatedTerm, _title, _content });
  }, []);

  return (
    <section className="task">
      <div className="task-header">
        <div className="">
          <button
            title="btn-delete"
            className="btn-delete"
            onClick={() => onRemove(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="tomato"
              fill="none"
            >
              <path
                d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
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
            {_title}
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
            {_content}
          </h4>
        </div>
      )}

      <div className="task-footer">
        <div className="task__created">
          <span>23/94/24</span>
          <span>.23:00 a.m</span>
        </div>
        <div className="task__actions">
          <div className="">
            {_status === TaskStatus.ALL && (
              <button
                title="btn-toggle"
                className="btn-favorites"
                onClick={() => onToggleSetStatus(TaskStatus.FAVORITE, _id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#fff1f1"
                  fill="none"
                >
                  <path
                    d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            )}

            {_status == TaskStatus.FAVORITE && (
              <button
                title="btn-toggle"
                className="btn-favorites"
                onClick={() => onToggleSetStatus(TaskStatus.ALL, _id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="tomato"
                  fill="tomato"
                >
                  <path
                    d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="">
            <button className="btn-pin" title="btn-pin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#fff1f1"
                fill="none"
              >
                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="">
            <button title="btn-menu" className="btn-menu">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#fffafa"
                  fill="none"
                >
                  <rect
                    x="10.5"
                    y="3"
                    width="3"
                    height="3"
                    rx="1"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <rect
                    x="10.5"
                    y="10.5"
                    width="3"
                    height="3"
                    rx="1"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <rect
                    x="10.5"
                    y="18"
                    width="3"
                    height="3"
                    rx="1"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="dropdown-menu">
        <DropdownMenu id={_id} items={Object.values({ ...TaskStatus })} />
      </div>

      {/* <div className="task__actions">
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
      </div> */}
    </section>
  );
};
