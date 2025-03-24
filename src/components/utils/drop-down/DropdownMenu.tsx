import React, { useEffect } from "react";
import "./DropdownMenu.scss";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces";
import Task from "../../../models/domain/task.model";
import { useInput } from "../../../hooks";
import { addTaskStatusAction } from "../../../redux/actions/color.actions";

function DropdownMenu(
  { 
    id ="",
    items= [""],

  },
  emptyComponent = (
    <>
      <h1>Comoponent not found</h1>
    </>
  )
) {
    const d = useDispatch<Dispatch<IAction<Task | any>>>();
    const { i, memoizedChangeV, _} = useInput({});
    console.log(i);
    useEffect(() => {
        // set component [status]
        d(addTaskStatusAction(i.status, id))

    }, [i]);
  return (
    <section className="dropdown-list">
      <div className="">
        <ul className="dropdown-menu-list">
          {items
            ? items.map((i: any) => (
                <li className="dropdown-menu-item" key={i.key}>
                  <span>
                    <input
                      type="radio"
                      name="status"
                      value={i}
                      onChange={(e) => {
                        memoizedChangeV(e.target.name, e.target.value);
                      }}
                      
                    />
                  </span>
                  <span>{i.toLowerCase()}</span>
                </li>
              ))
            : emptyComponent}
        </ul>
      </div>
    </section>
  );
}

export default DropdownMenu;
