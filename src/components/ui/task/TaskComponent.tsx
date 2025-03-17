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

      <div className="task-footer">
        <div className="task__created">
          <span>23/94/24</span><span>.23:00 a.m</span>
        </div>
        <div className="task__actions">
          <div className="">
            <button className="btn-favorites">
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
          </div>

          <div className="">
            <button className="btn-pin">
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
            <button className="btn-delete" onClick={() => onRemove(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="tomato"
                fill="none"
              >
                <path
                  d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9.5 16.5L9.5 10.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.5 16.5L14.5 10.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
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
