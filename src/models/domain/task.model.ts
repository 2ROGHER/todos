/**
 * This module is responsible to define all models (object) in our application.
 */

class Task {
  private _id: string;
  private _title: string;
  private _content: string;
  private _completed: boolean;

  private _favorites: boolean;
  private _deleted: boolean;
  private _archived: boolean;

  constructor(
    id: string,
    title: string,
    content: string,
    completed: boolean,
    favorites: boolean,
    deleted: boolean,
    archived: boolean
  ) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._completed = completed;
    this._favorites = favorites;
    this._deleted = deleted;
    this._archived = archived;
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

  get favorites(): boolean {
    return this._favorites;
  }

  set favorites(value: boolean) {
    this._favorites = value;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }

  get archived(): boolean {
    return this._archived;
  }

  set archived(value: boolean) {
    this._archived = value;
  }
}

export default Task;
