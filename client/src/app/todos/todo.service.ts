import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  readonly todoUrl: string = environment.apiUrl + 'todos';

  constructor(private httpClient: HttpClient) {
  }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTodos(filters?: { status?: boolean; bodyText?: string; owner?: string; category?: string}): Observable<Todo[]> {
    const httpParams: HttpParams = new HttpParams();
    // if (filters) {
    //   if (filters.status) {
    //     httpParams = httpParams.set('status', filters.status.toString());
    //   }
    //   if (filters.owner) {
    //     httpParams = httpParams.set('owner', filters.owner);
    //   }
    //   if (filters.bodyText) {
    //     httpParams = httpParams.set('bodyText', filters.bodyText);
    //   }
    //   if (filters.category) {
    //     httpParams = httpParams.set('category', filters.category);
    //   }
    // }

    return this.httpClient.get<Todo[]>(this.todoUrl, {
      params: httpParams,
    })
  }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  filterTodos(todos: Todo[], filters: {limit?: number } ): Todo[] {
    let filteredTodos = todos;

    if (filters.limit && filters.limit < 201 && filters.limit > 0) {
      filteredTodos = filteredTodos.slice(0, filters.limit);
    }

    return filteredTodos;
  }

}
