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
import { Subject } from 'rxjs';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';


@Component({
  selector: 'app-todos-list-component',
  standalone: true,
  imports: [ MatCard, MatCardTitle, MatCardContent, MatFormField, MatLabel, MatInput, FormsModule, MatHint, MatSelect, MatOption, MatRadioGroup, MatRadioButton, MatNavList, MatListSubheaderCssMatStyler, MatListItem, RouterLink, MatListItemAvatar, MatListItemTitle, MatListItemLine, MatError],
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
}
