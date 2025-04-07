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

    if (!filters.filterValue && !tasks.length) return [];

    if (filters.filteredItems.length > 0) {
      console.log("filters.filteredItems: ", filters.filteredItems);

      return tasks.filter((t: Task) =>
        filters.filteredItems.some(f => t.status === f)
      );
    }

    if (!filters.filterValue || filters.filterValue === "DEFAULT") {
      return tasks;
    }

    // if (filters.filteredItems) {
    //   console.log("filters.filteredItems: ", filters.filteredItems.join(""));
    //   return tasks.filter((t: Task) =>
    //     t.status.includes(filters.filteredItems.join(""))
    //   );
    // }

    

    return tasks.filter((t: Task) => t.status === filters.filterValue);
  }
);
