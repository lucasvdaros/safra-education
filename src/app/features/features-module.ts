import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { FeaturesRoutingModule } from "./features-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { OptinComponent } from './optin/optin.component';
import { SimulatorComponent } from './dashboard/components/simulator/simulator.component';
import { MorningCallsComponent } from './dashboard/components/morning-calls/morningcalls.component';
import { CardMorningComponent } from './dashboard/components/card-morning/cardmorning.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    SimulatorComponent,
    MorningCallsComponent,
    OptinComponent,
    CardMorningComponent,  
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