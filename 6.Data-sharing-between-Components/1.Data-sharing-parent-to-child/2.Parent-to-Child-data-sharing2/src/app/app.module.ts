import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavCollapsComponent } from './nav-collaps/nav-collaps.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { PayrollComponent } from './payroll/payroll.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CrmComponent } from './crm/crm.component';
import { ProductionComponent } from './production/production.component';
import { EstimationAndCostingComponent } from './estimation-and-costing/estimation-and-costing.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavItemComponent,
    NavCollapsComponent,
    AppSettingsComponent,
    HomeComponent,
    AccountComponent,
    PayrollComponent,
    OrderProcessingComponent,
    InventoryComponent,
    CrmComponent,
    ProductionComponent,
    EstimationAndCostingComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
