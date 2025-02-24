/**
 * This module is responsible to define all models (object) in our application.
 */

class Task {
  private _id: string;
  private _title: string;
  private _content: string;
  private _completed: boolean;

  constructor(id: string, title: string, content: string, completed: boolean) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._completed = completed;
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

  get completed(): boolean {
    return this._completed;
  }

  set id(value: string) {
    this._id = value;
  }

  set title(value: string) {
    this._title = value;
  }

  set content(value: string) {
    this._content = value;
  }

  set completed(value: boolean) {
    this._completed = value;
  }
}

export default Task;
