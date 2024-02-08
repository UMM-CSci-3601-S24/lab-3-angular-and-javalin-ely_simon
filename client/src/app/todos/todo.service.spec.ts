import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  // A small collection of test users
  const testUsers: Todo[] = [
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
      category: 'sports'
    },
    {
      _id: 'bob_id',
      owner: 'Bob',
      status: true,
      bodyText: 'dress',
      category: 'sports'
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

  describe('getUsers()', () => {

    it('calls `api/users` when `getTodos()` is called with no parameters', () => {
      todoService.getTodos().subscribe(
        users => expect(users).toBe(testUsers)
      );

      const req = httpTestingController.expectOne(todoService.todoUrl);
      // Check that the request made to that URL was a GET request.
      expect(req.request.method).toEqual('GET');
      // Check that the request had no query parameters.
      expect(req.request.params.keys().length).toBe(0);
      // Specify the content of the response to that request. This
      // triggers the subscribe above, which leads to that check
      // actually being performed.
      req.flush(testUsers);
    });
  });

});
