import { createSelector } from "reselect";
import Task from "../../models/domain/task.model";
import { ITask } from "../../models/interfaces";
import { FilterState } from "../../models/interfaces/filter-state.interface";
import { TaskStatus } from "../../enums/task-status.enum";
// import { useState } from "react";

// Firts we need to select the [tasks] state from the [base state] Store
const tasksSelected = (state) => state.tasks.tasks;
// Now we need to select the the [filter] state from the [base state] Store
const filtersSelected = (state) => state.filters;

// Now we need to combine booth state to do filters
export const selectedFilteredTasks = createSelector(
  [tasksSelected, filtersSelected],
  (tasks: Task[], filters: FilterState) => {
    // If there is no filter value, we need to return an empty array.
    if (!tasks.length) return [];

    let filteredTasks = [...tasks];

    // 1. Filter by multiple values (filteredItems) apply filter by multiple task states ['default', 'completed, 'favorite', ect].
    if (filters.filteredItems.length && !filters.filterValue) {
      return filteredTasks.filter(
        (t: Task) => filters.filteredItems.includes(t.status)
      );
    }

    // 2. Filter tasks by only a single value. Example only 'favorite' or 'completed' or 'deleted' or 'default'.
    if (filters.filterValue) {
      return filteredTasks.filter(
        (t: Task) => t.status === filters.filterValue
      );
    }

    // 3. Filter by search term value to search any task in the body o the task
    if (filters.searchTerm && filters.searchTerm.trim() != "") {
      return tasks.filter(
        (t: Task) =>
          t.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          t.content.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    // Fitler by multiple states (filteredItems)

    // return tasks.filter((t: Task) => {
    //     const matchSearch = t.title.toLowerCase().includes(filters.searchTerm.toLowerCase());

    //     const matchStatus = (filters.status === 'ALL') ||  (filters.status === "COMPLETED");
    //     return matchSearch && matchStatus;
    // });
    // console.log('tasks at selector', tasks);
    // return tasks.filter(
    //   (t: Task) => true // filters.filterValue == "ALL" && t.status === "ALL"
    // );
    // return tasks.filter((t: Task) => t.status == "ALL");

    // 1. Get all tasks from the [store] by filter type
    // 2. return an array of all tasks
    // 3. Add filter as [searchTerm] to filter by search task
    // 4. compose all tasks to show a simple task list.

    // if (!filters.filterValue && !tasks.length) return [];

    // if (filters.filteredItems.length && !filters.filterValue) {
    //   return tasks.filter((t: Task) =>
    //     filters.filteredItems.includes(t.status)
    //   );
    // }

    // if (!filters.filterValue || filters.filterValue === "DEFAULT") {
    //   return tasks;
    // }

    // if (filters.filteredItems) {
    //   console.log("filters.filteredItems: ", filters.filteredItems.join(""));
    //   return tasks.filter((t: Task) =>
    //     t.status.includes(filters.filteredItems.join(""))
    //   );
    // }

    // 4. If there is no filter value, we need to return all tasks to view.
    return filteredTasks.filter((t: Task) => t.status !== "PENDING");
  }
);
