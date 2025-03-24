import React, { JSX, useEffect, useMemo, useState } from "react";
import { CreateTaskFormComponent } from "../../ui/create/CreateTaskFormComponent";
import { useDispatch } from "react-redux";
import { v4 as uuid, v4 } from "uuid";
import { createTaskAction } from "../../../redux/actions";
import Task from "../../../models/domain/task.model";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces/action.interface";
import { useInput } from "../../../hooks/useInput.hook";

export const CreateTaskFormContainer = ({
  f,
}: {
  f: (e: boolean) => void;
}): JSX.Element => {
  // We need to define the initial useInput value as an object.
  // We need to pass this value to presenter to controll the input fields.
  const { i, memoizedChangeV, reset } = useInput({ title: "", content: "" });

  const dispatch = useDispatch<Dispatch<IAction<Task>>>();

  /**
   * Note important!: This functions is created each time this component is created.
   * We shoulbe use useCallback to memoized this function and avoid create this function eacch time this component
   * is created.
   * @param e
   */
  const handleCreateTask = () => {
    dispatch(
      createTaskAction(
        new Task(v4(), i.title, i.content, false, false, false, false)
      )
    );
    reset();
  };

  /**
   * This memoized form is used to (memoized), wich is passed as [props] to CreateTaskFormComponent
   * This method can be implemented as a custom Hook
   * TODO: implement letter this hook
   * This memized hook store the the value and recalc this values wheater the [dependencies] changes
   */
  const memoizedForm = useMemo(
    () => (
      <CreateTaskFormComponent
        onCreate={handleCreateTask}
        onSetV={memoizedChangeV}
        onHiddeForm={f}
        i={i}
      />
    ),
    [i] // This is the [dependencies] of the hook.
  );
  return (
    <>
      {/* <CreateTaskFormComponent
        i={i}
        onCreate={handleCreateNewTask}
        onSetV={setV}
      /> */}

      {memoizedForm}
    </>
  );
};
