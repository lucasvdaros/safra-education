import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseLayoutRoutingModule } from './base-layout-routing.module';
import { BaseLayoutComponent } from './base-layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
    BaseLayoutRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class BaseLayoutModule { }
