import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  @Output() logout: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onLogoutBtnClick(): void {
    this.logout.emit();
  }
}
