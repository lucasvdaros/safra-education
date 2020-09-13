import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { FeaturesRoutingModule } from "./features-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,  
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class FeatureModule { }