import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const API_URL = new InjectionToken<string>('API_URL');

@NgModule({
  declarations: [
    ItemsListComponent,
    EditItemComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000/api' }
  ],
  exports: [
    ItemsListComponent
  ]
})
export class ItemsModule { }
