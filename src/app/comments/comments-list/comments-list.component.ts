import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { AuthState } from '../../auth/store/auth.reducers';
import { Comment } from '../comment.model';
import { CommentsState } from '../store/comments.reducers';
import * as CommentsActions from '../store/comments.actions';
import { ItemsState } from '../../items/store/items.reducers';
import { Item } from 'src/app/items/item.model';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  public comments: Comment[];
  public authenticated: boolean = false;
  public selectedItem: Item;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('auth')
      .subscribe((authState: AuthState) => {
        this.authenticated = authState.authenticated;
      });

    this._store.select('comments')
      .subscribe((commentsState: CommentsState) => {
        this.comments = commentsState.comments;
      });

    this._store.select('items')
      .pipe(
        map((itemsState: ItemsState) => {
          return itemsState.selectedItem
        }),

        distinctUntilChanged()
      )
      .subscribe((selectedItem: Item) => {

        if (selectedItem) {
          if (!this.selectedItem || (this.selectedItem.id !== selectedItem.id))
            this._store.dispatch(new CommentsActions.RequestFetchCommentsAction(selectedItem.id));
        } else {
          this.comments = [];
        }

        this.selectedItem = selectedItem;
      });
  }

  public onCommentInput(commentText: string): void {
    if (!this.selectedItem) return;

    this._store.dispatch(new CommentsActions.RequestAddCommentAction({
      item: { ...this.selectedItem },
      comment: new Comment(null, this.selectedItem.id, commentText)
    }));
  }
}
