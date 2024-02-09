import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../app/todos/todo';
import { TodoService } from '../app/todos/todo.service';

@Injectable()
export class MockTodoService extends TodoService {
  static testTodos: Todo[] = [
    {
      _id: 'chris_id',
      owner: 'Chris',
      status: true,
      bodyText: 'UMM',
      category: 'video games'
    },
    {
      _id: 'james_id',
      owner: 'James',
      status: false,
      bodyText: 'sit',
      category: 'groceries'
    },
    {
      _id: 'bob_id',
      owner: 'Bob',
      status: true,
      bodyText: 'dress',
      category: 'groceries'
    },
  ];

  constructor() {
    super(null);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTodos(_filters?: { status?: boolean; bodyText?: string; owner?: string; category?: string}): Observable<Todo[]> {
    return of(MockTodoService.testTodos);
  }
}