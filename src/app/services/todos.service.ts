import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type'; //this came from model/todo.type.ts

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [{
    userId: 1,
    completed: false,
    title: 'Meljohn',
    id: 0,
  },
  {
    userId: 1,
    completed: false,
    title: 'Jay',
    id: 1,
  },
  {
    userId: 1,
    completed: false,
    title: 'Luna',
    id: 2,
  },
];
  constructor() { }
}
