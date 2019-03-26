import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';
import { CommentsModule } from './comments/comments.module';

import { AppComponent } from './app.component';
import { reducers } from './store/app.reducers';
import { AuthEffects } from './auth/store/auth.effects';
import { environment } from '../environments/environment';
import { ItemsEffects } from './items/store/items.effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CommentsEffects } from './comments/store/comments.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    ItemsModule,
    CommentsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, ItemsEffects, CommentsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
