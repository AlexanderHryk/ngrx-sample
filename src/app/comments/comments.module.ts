import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comment/comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';

export const API_URL = new InjectionToken<string>('API_URL');

@NgModule({
  declarations: [
    CommentsListComponent,
    CommentComponent,
    EditCommentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000/api' }
  ],
  exports: [
    CommentsListComponent
  ]
})
export class CommentsModule { }
