import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public incorrectEmailOrPassword: boolean = false;

  @Output() public login: EventEmitter<{ email: string, password: string }> = new EventEmitter();
  @Output() public cancel: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  public onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.login.emit({
      email: form.value.email,
      password: form.value.password
    });
  }

  public onResetBtnClick(): void {
    this.cancel.emit();
  }
}
