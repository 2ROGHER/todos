/**
 * This module is responsible to define all models (object) in our application.
 */

import { TaskStatus } from "../../enums/task-status.enum";

class Task {
  private _id: string;
  private _title: string;
  private _content: string;

  private _status: TaskStatus;

  private _createdAt: string;
  private _updatedAt: string;

  constructor(
    id: string,
    title: string,
    content: string,
    status: TaskStatus,
    createdAt: string,
    updatedAt: string
  ) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._status = status;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get id(): string {
    return this._id;
  }
  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }

  set status(s: TaskStatus) {
    this._status = s;
  }

  get status() {
    return this._status;
  }

  set id(v: string) {
    this._id = v;
  }

  set title(v: string) {
    this._title = v;
  }

  set content(v: string) {
    this._content = v;
  }

  set createdAt(v: string) {
    this._createdAt = v;
  }

  get createdAt() {
    return this._createdAt;
  }

  set updatedAt(v: string) {
    this._updatedAt = v;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}

export default Task;
