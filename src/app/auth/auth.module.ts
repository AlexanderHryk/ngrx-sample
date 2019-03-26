import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';

export const API_URL = new InjectionToken<string>('API_URL');

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000/api' }
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
