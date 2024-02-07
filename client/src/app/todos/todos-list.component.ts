import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo, TodoRole } from './todo';
import { TodoService } from './todo.service';
import { Subject, takeUntil } from 'rxjs';
import { RouterLink } from '@angular/router';
import { MatNavList, MatListSubheaderCssMatStyler, MatListItem, MatListItemAvatar, MatListItemTitle, MatListItemLine } from '@angular/material/list';

import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatHint, MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-todos-list-component',
  standalone: true,
  imports: [],
  templateUrl: 'todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  imports: [MatFormField, MatLabel, MatInput, FormsModule, MatHint, MatSelect, MatOption, MatRadioGroup, MatRadioButton, MatNavList, MatListSubheaderCssMatStyler, MatListItem, RouterLink, MatListItemAvatar, MatListItemTitle, MatListItemLine, MatError]
})
export class TodosComponent {

}
