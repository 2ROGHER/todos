import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTaskStatusAction } from "../../../redux/actions/task.actions";
import "./FilterBar.scss";
import DropdownMenu from "../../utils/drop-down/DropdownMenu";
import { TaskStatus } from "../../../enums/task-status.enum";

import { useInput } from "../../../hooks";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces";
import Task from "../../../models/domain/task.model";
import { filterTaskByStatus } from "../../../redux/actions/tasks.actions";

function FilterBarComponent({ g }: { g: (e: any) => void }) {
  const d = useDispatch<Dispatch<IAction<Task | any>>>();
  const { i, memoizedChangeV, _ } = useInput({});

  useEffect(() => {
    // set component [status]
    // d(addTaskStatusAction(i.status));

    // Weather exists any changes at [i] object status we need to [dispatch] an action to the reducer
    // an filter the task by status
    // d(filterTaskByStatus(i.status));
    console.log("changes exists at ", i);
    g({ ...i})
  }, [i]);

  return (
    <aside className="filterbar-content">
      <div className="filterbar-box">
        <button title="filterbar-arrow__down" className="filterbar-arrow__down">
          <span className="status">status:</span>
          <span className="select-item">{i.status}</span>
          <span className="arrow-down">
            <svg
              width="24"
              height="24"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
            >
              <path
                d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
              <path
                d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="filterbar-menu">
        <DropdownMenu
          items={Object.values({ ...TaskStatus })}
          type="multiple"
          onSetV={memoizedChangeV}
        />
      </div>
    </aside>
  );
}

export default FilterBarComponent;
