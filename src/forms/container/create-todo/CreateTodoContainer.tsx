import React, { JSX, useState } from "react";
import { NewTodoForm } from "../../ui/create/NewTask";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { createTaskAction } from "../../../redux/actions";
import Task from "../../../models/domain/task.model";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces/action.interface";

export const CreateTodoFormContainer = (): JSX.Element => {

  const [fields, setFields] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch<Dispatch<IAction<Task>>>();

  const handleCreateNewTask = () => {
    dispatch(
      createTaskAction(new Task(uuid(), fields.title, fields.content, false))
    );
  };

  const submitForm = (e: React.FormEvent<HTMLFieldSetElement>): void => {
    e.preventDefault();
    setFields({ ...fields, title: "", content: "" });
  };

  return (
    <>
      <NewTodoForm
        onSubmit={submitForm}
        onCreate={handleCreateNewTask}
        onSetFields={setFields}
        fields={fields}
      />

      <pre>
        <code>{JSON.stringify(fields, null, 2)}</code>
      </pre>
    </>
  );
};
