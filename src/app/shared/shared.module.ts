import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IconsModule } from "./components/icons/icons.module";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
      IconsModule,
      MatSlideToggleModule,
      MatDividerModule,
      MatListModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule,      
      MatAutocompleteModule
    ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      IconsModule,
      MatInputModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatDividerModule,
      MatListModule,
      MatCheckboxModule,
      MatDatepickerModule,  
      MatNativeDateModule,     
      MatAutocompleteModule
    ]
  })
export class SharedModule { }