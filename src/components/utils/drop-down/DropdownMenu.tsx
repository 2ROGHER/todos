import React, { useEffect } from "react";
import "./DropdownMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces";
import Task from "../../../models/domain/task.model";
import { useInput } from "../../../hooks";
import { addTaskStatusAction } from "../../../redux/actions/task.actions";
import { TaskStatus } from "../../../enums/task-status.enum";

/**
 * This custom hook allows us to create a [dropdown menu] to select and filter tasks from the list items.
 * This [Component] receives as argument [props] and [props component]
 * [type]: specifies the type of the dropdown menu is. Such as, 'only' only allow to choose one option and 'multiple'
 * that allows to select multiple items to filter the task.
 * This component is independent by the parent component.
 * We need to use the [facorty] design pattern here.

 * @param param0
 * @param emptyComponent
 * @returns
 */
function DropdownMenu(
  {
    id="",
    items = [""], // [items] array of items to render at DOM
    type = "only", // type of menu to render. 'only' or 'multiple'
    onSetV = (k: string, v: any) => {} // [hold] the item selecteded
  },
  emptyComponent = (
    <>
      <h1>Comoponent not found</h1>
    </>
  )
) {
  // 1. Add some own logic to handle certain actions
  const checked = useSelector((state: any) => state.filters.filteredItems);
  
  return (
    <section className="dropdown-list">
      <div className="">
        <ul className="dropdown-menu-list">
          {items
            ? items.map((i: any) => (
                // Wether the element input is ['only'] we need to render the input with type='ratio'

                <li className="dropdown-menu-item" key={i.key}>
                  {type == "only" ? (
                    <span>
                      <input
                        type="radio"
                        name="status"
                        value={i}
                        onChange={(e) => {
                          onSetV(e.target.name, e.target.value); // {status: "DELETED"}
                        }}
                      />
                    </span>
                  ) : (
                    // Wether the element input is ['multiple'] we need to render the input with type='checkbox'
                    <span>
                      <input
                        type="checkbox"
                        checked={checked.includes(i)} // Any component is checked if exists in the [filteredItems] array.
                        name="status"
                        value={i}
                        onChange={(e) => {
                          onSetV(e.target.name, e.target.value);
                        }}
                      />
                    </span>
                  )}
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
