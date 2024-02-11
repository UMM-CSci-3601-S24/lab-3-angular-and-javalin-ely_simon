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
  getTodos(filters?: { status?: boolean; body?: string; owner?: string; category?: string}): Observable<Todo[]> {
    let httpParams: HttpParams = new HttpParams();
    if (filters) {
    //   if (filters.status) {
    //     httpParams = httpParams.set('status', filters.status.toString());
    //   }
    //   if (filters.owner) {
    //     httpParams = httpParams.set('owner', filters.owner);
    //   }
      if (filters.body) {
        httpParams = httpParams.set('contains', filters.body);
      }
    //   if (filters.category) {
    //     httpParams = httpParams.set('category', filters.category);
    //   }
    }

    return this.httpClient.get<Todo[]>(this.todoUrl, {
      params: httpParams,
    })
  }

  filterTodos(todos: Todo[] ): Todo[] {
    const filteredTodos = todos;



    return filteredTodos;
  }
}
