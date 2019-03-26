import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public authenticated: boolean = false;
  public incorrectEmailOrPassword: boolean = false;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('auth')
      .subscribe((authState: AuthState) => {
        this.authenticated = authState.authenticated;
        this.incorrectEmailOrPassword = authState.incorrectEmailOrPassword;
      });
  }

  public onLogin(event: { email: string, password: string }) {
    this._store.dispatch(new AuthActions.LoginAction({
      email: event.email,
      password: event.password
    }));
  }

  public onCancel(): void {
    this._store.dispatch(new AuthActions.SetIncorrectEmailOrPassword(false));
  }

  public onLogout(): void {
    this._store.dispatch(new AuthActions.LogoutAction());
  }
}
