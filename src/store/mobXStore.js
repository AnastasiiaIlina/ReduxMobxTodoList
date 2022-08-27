import { makeAutoObservable } from 'mobx';

class TodoClass {
  todos = [];

  constructor() {
    makeAutoObservable(this);
    this.remove = this.remove.bind(this);
    this.complete = this.complete.bind(this);
  }

  add(todo) {
    this.todos.push(todo);
  }
  remove(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
  complete(todoId) {
    this.todos = this.todos.map((todo) =>
      todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
  }
}

export const todoStore = new TodoClass();
