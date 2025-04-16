import React, { JSX, useEffect, useState } from "react";
import PaginationComponent from "../../ui/pagination/PaginationComponent";
// import { useFetch } from "../../../hooks/useFetch";
import Task from "../../../models/domain/task.model";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces";
import { setFetchDataToTasks } from "../../../redux/actions/tasks.actions";

export const PaginationContainer = (): JSX.Element => {
  const d = useDispatch<Dispatch<IAction<any>>>();

  const [page, setPage] = useState<number>(0); // the page controlled;
  const [size, setSize] = useState<number>(10); // the size controlled;

  // const { data, loading, error, refetch } = useFetch<Task>(
  //   `http://localhost:8080/api/v1/tasks?page=${page}&size=${size}`,
  //   page, // the page
  //   size // size of the pagination
  // );
    const data = [];

  useEffect(() => {
    //
    if (data.length > 0) {
    //   d(setFetchDataToTasks(data));
    }
  }, [data, d, page]);

  const handleGetTasks = (p: number) => {
    setPage(p);
    //refetch(); // recall the fetch method at the useFecth hook 🪝
  }

  return <PaginationComponent items={new Array(5).fill(null)} onGetTasks={handleGetTasks} />
}