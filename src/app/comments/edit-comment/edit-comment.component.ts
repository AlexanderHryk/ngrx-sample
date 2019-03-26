import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  @Output() enter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onEnterKeydown(event: KeyboardEvent, commentText: string): void {
    event.preventDefault();

    this.enter.emit(commentText);
  }
}
