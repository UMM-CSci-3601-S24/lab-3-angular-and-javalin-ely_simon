import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatNavList, MatListSubheaderCssMatStyler, MatListItem, MatListItemAvatar, MatListItemTitle, MatListItemLine } from '@angular/material/list';

import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatHint, MatError } from '@angular/material/form-field';
import { Todo } from './todo';
import { Subject, takeUntil } from 'rxjs';
import { TodoService } from './todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos-list-component',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, FormsModule, MatHint, MatSelect, MatOption, MatRadioGroup, MatRadioButton, MatNavList, MatListSubheaderCssMatStyler, MatListItem, RouterLink, MatListItemAvatar, MatListItemTitle, MatListItemLine, MatError],
  templateUrl: 'todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  providers: [],
})
export class TodosComponent {
public serverFilteredTodos: Todo[];
public filteredTodos: Todo[];

public todoStatus: boolean;
public todoOwner: string;
public todoBodyText: string;
public todoCategory: string;

errMsg='';
private ngUnsubscribe = new Subject<void>();



  /**
   * This constructor injects both an instance of `UserService`
   * and an instance of `MatSnackBar` into this component.
   *
   * @param todoService the `UserService` used to get users from the server
   * @param snackBar the `MatSnackBar` used to display feedback
   */
  constructor(private todoService: TodoService, private snackBar: MatSnackBar) {
    // Nothing here – everything is in the injection parameters.
  }


  getTodosFromServer(){
    // A user-list-component is paying attention to userService.getUsers()
    // (which is an Observable<User[]>).
    // (For more on Observable, see: https://reactivex.io/documentation/observable.html)

    //role: this.userRole,
   // age: this.userAge

    this.todoService.getTodos({
      // Filter the users by the role and age specified in the GUI
    }).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe({
      // Next time we see a change in the Observable<User[]>,
      // refer to that User[] as returnedUsers here and do the steps in the {}
      next: (returnedTodos) => {
        // First, update the array of serverFilteredUsers to be the User[] in the observable
        this.serverFilteredTodos = returnedTodos;
        // Then update the filters for our client-side filtering as described in this method
        this.updateFilter();
      },
      // If we observe an error in that Observable, put that message in a snackbar so we can learn more
      error: (err) => {
        if (err.error instanceof ErrorEvent) {
          this.errMsg = `Problem in the client – Error: ${err.error.message}`;
        } else {
          this.errMsg = `Problem contacting the server – Error Code: ${err.status}\nMessage: ${err.message}`;
        }
      },
    })



  }





}
