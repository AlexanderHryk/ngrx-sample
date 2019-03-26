import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { AuthState } from '../../auth/store/auth.reducers';
import { FormControl } from '@angular/forms';
import * as ItemsActions from '../store/items.actions';
import { Item } from '../item.model';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  public nameControl: FormControl;
  public authenticated: boolean = false;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.nameControl = new FormControl('');

    this._store.select('auth')
      .subscribe((authState: AuthState) => {
        this.authenticated = authState.authenticated;
      });

    this.nameControl.valueChanges.pipe(
      debounceTime(500),

      distinctUntilChanged()
    ).subscribe((name: string) => {
      if (!this.authenticated) {
        this._store.dispatch(new ItemsActions.RequestSearchByName(name));
      }
    });
  }

  public onAddBtnClick() {
    const itemName = this.nameControl.value;
    if (!itemName) return;

    this._store.dispatch(
      new ItemsActions.RequestAddItemAction(
        new Item(null, itemName, null)
      )
    );
  }
}