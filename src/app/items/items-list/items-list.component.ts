import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/auth/store/auth.reducers';
import { Item } from '../item.model';
import * as ItemsActions from '../store/items.actions';
import { ItemsState } from '../store/items.reducers';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public items: Item[];
  public selectedItem: Item;
  public authenticated: boolean;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('auth')
      .subscribe((authState: AuthState) => {
        this.authenticated = authState.authenticated;
      });

    this._store.select('items')
      .subscribe((itemsState: ItemsState) => {
        this.items = itemsState.items;
        this.selectedItem = itemsState.selectedItem;
      });

    this._store.dispatch(new ItemsActions.RequestFetchItemsAction());
  }

  public select(item: Item) {
    this._store.dispatch(new ItemsActions.SelectItemAction(item));
  }

  public delete(item: Item) {
    this._store.dispatch(new ItemsActions.RequestDeleteItemAction(item.id));
  }
}