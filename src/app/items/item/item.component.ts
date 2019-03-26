import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() deleteVisible: boolean;
  @Output() delete: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onDeleteBtnClick(event: MouseEvent): void {
    event.stopPropagation();
    this.delete.emit(this.item);
  }
}
