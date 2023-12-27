import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppSettingsComponent } from './app-settings/app-settings.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { PayrollComponent } from './payroll/payroll.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CrmComponent } from './crm/crm.component';
import { ProductionComponent } from './production/production.component';
import { EstimationAndCostingComponent } from './estimation-and-costing/estimation-and-costing.component';

const routes: Routes = [
  {path:"app", component:AppSettingsComponent},
  {path:"home", component:HomeComponent},
  {path:"acc", component:AccountComponent},
  {path:"payroll", component:PayrollComponent},
  {path:"op", component:OrderProcessingComponent},
  {path:"inv", component:InventoryComponent},
  {path:"crm", component:CrmComponent},
  {path:"pro", component:ProductionComponent},
  {path:"ec", component:EstimationAndCostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
