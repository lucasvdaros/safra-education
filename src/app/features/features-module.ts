import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { FeaturesRoutingModule } from "./features-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { OptinComponent } from './optin/optin.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    OptinComponent,  
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