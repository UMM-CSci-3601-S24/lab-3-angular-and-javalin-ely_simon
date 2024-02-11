import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  const testTodos: Todo[] = [
    {
      _id: 'chris_id',
      owner: 'Chris',
      status: true,
      body: 'UMM',
      category: 'video games'
    },
    {
      _id: 'james_id',
      owner: 'James',
      status: false,
      body: 'sit',
      category: 'groceries'
    },
    {
      _id: 'bob_id',
      owner: 'Bob',
      status: true,
      body: 'dress',
      category: 'groceries'
    },
  ];
  let todoService: TodoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    todoService = new TodoService(httpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getTodos()', () => {

    it('calls `api/todos` when `getTodos()` is called with no parameters', () => {
      todoService.getTodos().subscribe(
        todos => expect(todos).toBe(testTodos)
      );

      const req = httpTestingController.expectOne(todoService.todoUrl);
      expect(req.request.method).toEqual('GET');
      expect(req.request.params.keys().length).toBe(0);
      req.flush(testTodos);
    });

  });

  describe('Calling getUsers() with parameters correctly forms the HTTP request', () => {

    it('correctly calls api/todos with filter parameter \'sit\'', () => {
      todoService.getTodos({ body: 'sit' }).subscribe(
        todos => expect(todos).toBe(testTodos)
      );

      const req = httpTestingController.expectOne(
        (request) => request.url.startsWith(todoService.todoUrl) && request.params.has('contains')
      );

      expect(req.request.method).toEqual('GET');

      expect(req.request.params.get('contains')).toEqual('sit');

      req.flush(testTodos);
    });

  describe('filterTodos()', () => {
    it('filters by nothing', () => {
      const filteredUsers = todoService.filterTodos(testTodos);
      expect(filteredUsers.length).toBe(3);
    });
  });
});

});
