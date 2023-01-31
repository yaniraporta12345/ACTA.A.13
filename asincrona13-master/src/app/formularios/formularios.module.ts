import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormRegistroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormRegistroComponent
  ]
})
export class FormulariosModule { }
