import { createSelector } from "reselect";
import Task from "../../models/domain/task.model";
import { ITask } from "../../models/interfaces";
import { FilterState } from "../../models/interfaces/filter-state.interface";
import { TaskStatus } from "../../enums/task-status.enum";

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
    switch (filters.filterValue) {
      case TaskStatus.ALL:
        return tasks.filter(
          (t: Task) =>
            t.status === TaskStatus.ALL || t.status === TaskStatus.FAVORITE
        );
      case TaskStatus.COMPLETED:
        return tasks.filter((t: Task) => t.status == TaskStatus.COMPLETED);

      case TaskStatus.COMPLETED:
        return tasks.filter((t: Task) => t.status == TaskStatus.COMPLETED);

      case TaskStatus.PENDING:
        return tasks.filter((t: Task) => t.status == TaskStatus.PENDING);
      case TaskStatus.FAVORITE:
        return tasks.filter((t: Task) => t.status == TaskStatus.FAVORITE);

      case TaskStatus.DELETED:
        return tasks.filter((t: Task) => t.status == TaskStatus.DELETED);

      case TaskStatus.SAVED:
        return tasks.filter((t: Task) => t.status == TaskStatus.SAVED);

      case TaskStatus.VIEWED:
        return tasks.filter((t: Task) => t.status == TaskStatus.VIEWED);

      case TaskStatus.UPDATED:
        return tasks.filter((t: Task) => t.status == TaskStatus.UPDATED);

      case TaskStatus.TOUCHED:
        return tasks.filter((t: Task) => t.status == TaskStatus.TOUCHED);

      case TaskStatus.LOCKED:
        return tasks.filter((t: Task) => t.status == TaskStatus.LOCKED);

      case TaskStatus.HIDDEND:
        return tasks.filter((t: Task) => t.status == TaskStatus.HIDDEND);
    }
  }
);
