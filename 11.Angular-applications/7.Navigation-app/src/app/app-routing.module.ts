import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './account/accounts/accounts.component';
import { CostingComponent } from './costing-module/costing-components/costing/costing.component';
import { CustomerrelationshipComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship/customerrelationship.component';
import { EstimationComponent } from './estimation-module/estimation-components/estimation/estimation.component';
import { InventoryComponent } from './inventory-module/Inventory-components/inventory/inventory.component';
import { NotificationComponent } from './notification-module/notification-components/notification/notification.component';
import { PayrollComponent } from './payroll-module/payroll-components/payroll/payroll.component';
import { ProductionComponent } from './production-module/production-components/production/production.component';

import { SchendulingComponent } from './scheduling-module/scheduling-components/schenduling/schenduling.component';
import { AccountsSettingsComponent } from './account/accounts-settings/accounts-settings.component';
import { AccountsEntriesComponent } from './account/accounts-entries/accounts-entries.component';
import { AccountsJournalsComponent } from './account/accounts-journals/accounts-journals.component';
import { AccountsLedgersComponent } from './account/accounts-ledgers/accounts-ledgers.component';
import { AccountsAttributesComponent } from './account/accounts-attributes/accounts-attributes.component';
import { AccountsCheckLeafsComponent } from './account/accounts-check-leafs/accounts-check-leafs.component';
import { AccountsBalanceSheetComponent } from './account/accounts-balance-sheet/accounts-balance-sheet.component';
import { AccountsProfitAndLossComponent } from './account/accounts-profit-and-loss/accounts-profit-and-loss.component';
import { AccountsReportsComponent } from './account/accounts-reports/accounts-reports.component';
import { PayrollSettingsComponent } from './payroll-module/payroll-components/payroll-settings/payroll-settings.component';
import { PayrollEmployeesComponent } from './payroll-module/payroll-components/payroll-employees/payroll-employees.component';
import { PayrollAttendanceComponent } from './payroll-module/payroll-components/payroll-attendance/payroll-attendance.component';
import { PayrollEsiPfComponent } from './payroll-module/payroll-components/payroll-esi-pf/payroll-esi-pf.component';
import { PayrollTimesheetComponent } from './payroll-module/payroll-components/payroll-timesheet/payroll-timesheet.component';
import { PayrollReportsComponent } from './payroll-module/payroll-components/payroll-reports/payroll-reports.component';
import { SalesOrdersComponent } from './sales-module/sales-components/sales-orders/sales-orders.component';
import { SalesReportsComponent } from './sales-module/sales-components/sales-reports/sales-reports.component';
import { SalesRequestsComponent } from './sales-module/sales-components/sales-requests/sales-requests.component';
import { SalesReturnComponent } from './sales-module/sales-components/sales-return/sales-return.component';
import { SalesSettingsComponent } from './sales-module/sales-components/sales-settings/sales-settings.component';
import { SalesShippingComponent } from './sales-module/sales-components/sales-shipping/sales-shipping.component';
import { SalesCustomersComponent } from './sales-module/sales-components/sales-customers/sales-customers.component';
import { SalesBillingComponent } from './sales-module/sales-components/sales-billing/sales-billing.component';
import { InventorySettingsComponent } from './inventory-module/Inventory-components/inventory-settings/inventory-settings.component';
import { InventoryOpeningComponent } from './inventory-module/Inventory-components/inventory-opening/inventory-opening.component';
import { InventoryGroupsComponent } from './inventory-module/Inventory-components/inventory-groups/inventory-groups.component';
import { InventoryProductsComponent } from './inventory-module/Inventory-components/inventory-products/inventory-products.component';
import { InventoryGrsComponent } from './inventory-module/Inventory-components/inventory-grs/inventory-grs.component';
import { InventoryEntriesComponent } from './inventory-module/Inventory-components/inventory-entries/inventory-entries.component';
import { InventoryConsumptionsComponent } from './inventory-module/Inventory-components/inventory-consumptions/inventory-consumptions.component';
import { InventoryReportsComponent } from './inventory-module/Inventory-components/inventory-reports/inventory-reports.component';
import { EstimationSettingsComponent } from './estimation-module/estimation-components/estimation-settings/estimation-settings.component';
import { EstimationRawMaterialsComponent } from './estimation-module/estimation-components/estimation-raw-materials/estimation-raw-materials.component';
import { EstimationConsumablesComponent } from './estimation-module/estimation-components/estimation-consumables/estimation-consumables.component';
import { EstimationProcessesComponent } from './estimation-module/estimation-components/estimation-processes/estimation-processes.component';
import { EstimationModelsComponent } from './estimation-module/estimation-components/estimation-models/estimation-models.component';
import { EstimationComputeComponent } from './estimation-module/estimation-components/estimation-compute/estimation-compute.component';
import { EstimationReportsComponent } from './estimation-module/estimation-components/estimation-reports/estimation-reports.component';
import { ProductionSettingsComponent } from './production-module/production-components/production-settings/production-settings.component';
import { ProductionPurchaseRequestsComponent } from './production-module/production-components/production-purchase-requests/production-purchase-requests.component';
import { ProductionEntiresComponent } from './production-module/production-components/production-entires/production-entires.component';
import { ProductionServiceRequestsComponent } from './production-module/production-components/production-service-requests/production-service-requests.component';
import { ProductionReportsComponent } from './production-module/production-components/production-reports/production-reports.component';
import { SchedulingSettingsComponent } from './scheduling-module/scheduling-components/scheduling-settings/scheduling-settings.component';
import { SchedulingProductionRequestApprovalComponent } from './scheduling-module/scheduling-components/scheduling-production-request-approval/scheduling-production-request-approval.component';
import { SchedulingEntriesMapComponent } from './scheduling-module/scheduling-components/scheduling-entries-map/scheduling-entries-map.component';
import { SchedulingReportsComponent } from './scheduling-module/scheduling-components/scheduling-reports/scheduling-reports.component';
import { CostingSettingsComponent } from './costing-module/costing-components/costing-settings/costing-settings.component';
import { CostingModelsComponent } from './costing-module/costing-components/costing-models/costing-models.component';
import { CostingEntriesComponent } from './costing-module/costing-components/costing-entries/costing-entries.component';
import { CostingReportsComponent } from './costing-module/costing-components/costing-reports/costing-reports.component';
import { NotificationSettingsComponent } from './notification-module/notification-components/notification-settings/notification-settings.component';
import { NotificationEmailsComponent } from './notification-module/notification-components/notification-emails/notification-emails.component';
import { NotificationSmsComponent } from './notification-module/notification-components/notification-sms/notification-sms.component';
import { NotificationChannelsComponent } from './notification-module/notification-components/notification-channels/notification-channels.component';
import { NotificationReportsComponent } from './notification-module/notification-components/notification-reports/notification-reports.component';
import { CustomerrelationshipSettingsComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship-settings/customerrelationship-settings.component';
import { CustomerrelationshipEntriesComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship-entries/customerrelationship-entries.component';
import { CustomerrelationshipReportsComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship-reports/customerrelationship-reports.component';

const routes: Routes = [
  {path:"accounts", component:AccountsComponent},
  {path:"costing", component:CostingComponent},
  {path:"customerrelationship", component:CustomerrelationshipComponent},
  {path:"estimation", component:EstimationComponent},
  {path:"inventory", component:InventoryComponent},
  {path:"notification", component:NotificationComponent},
  {path:"payroll", component:PayrollComponent},
  {path:"production", component:ProductionComponent},

  {path:"scheduling", component:SchendulingComponent},

  {path:"accounts-settings", component:AccountsSettingsComponent},
  {path:"accounts-entries", component:AccountsEntriesComponent},
  {path:"accounts-journals", component:AccountsJournalsComponent},
  {path:"accounts-ledgers", component:AccountsLedgersComponent},
  {path:"accounts-attributes", component:AccountsAttributesComponent},
  {path:"accounts-check-leafs", component:AccountsCheckLeafsComponent},
  {path:"accounts-balace-sheet", component:AccountsBalanceSheetComponent},
  {path:"accounts-profit-loss", component:AccountsProfitAndLossComponent},
  {path:"accounts-reports", component:AccountsReportsComponent},

  {path:"payroll-settings", component:PayrollSettingsComponent},
  {path:"payroll-employees", component:PayrollEmployeesComponent},
  {path:"payroll-attendence", component:PayrollAttendanceComponent},
  {path:"payroll-esi-pf", component:PayrollEsiPfComponent},
  {path:"payroll-timesheet", component:PayrollTimesheetComponent},
  {path:"payroll-reports", component:PayrollReportsComponent},

  {path:"sales-customers", component:SalesCustomersComponent},
  {path:"sales-billing", component:SalesBillingComponent},
  {path:"sales-orders", component:SalesOrdersComponent},
  {path:"sales-reports", component:SalesReportsComponent},
  {path:"sales-requests", component:SalesRequestsComponent},
  {path:"sales-return", component:SalesReturnComponent},
  {path:"sales-settings", component:SalesSettingsComponent},
  {path:"sales-shipping", component:SalesShippingComponent},

  {path:"inventory-settings", component:InventorySettingsComponent},
  {path:"inventory-opening", component:InventoryOpeningComponent},
  {path:"inventory-groups", component:InventoryGroupsComponent},
  {path:"inventory-products", component:InventoryProductsComponent},
  {path:"inventory-grs", component:InventoryGrsComponent},
  {path:"inventory-entries", component:InventoryEntriesComponent},
  {path:"inventory-consumptions", component:InventoryConsumptionsComponent},
  {path:"inventory-reports", component:InventoryReportsComponent},

  {path:"estimation-settings", component:EstimationSettingsComponent},
  {path:"estimation-raw-materials", component:EstimationRawMaterialsComponent},
  {path:"estimation-consumables", component:EstimationConsumablesComponent},
  {path:"estimation-processes", component:EstimationProcessesComponent},
  {path:"estimation-models", component:EstimationModelsComponent},
  {path:"estimation-compute", component:EstimationComputeComponent},
  {path:"estimation-reports", component:EstimationReportsComponent},
  
  {path:"production-settings", component:ProductionSettingsComponent},
  {path:"production-purchase-requests", component:ProductionPurchaseRequestsComponent},
  {path:"production-entires", component:ProductionEntiresComponent},
  {path:"production-service-requests", component:ProductionServiceRequestsComponent},
  {path:"production-reports", component:ProductionReportsComponent},

  {path:"scheduling-settings", component:SchedulingSettingsComponent},
  {path:"scheduling-production-request-approval", component:SchedulingProductionRequestApprovalComponent},
  {path:"scheduling-Entries-map", component:SchedulingEntriesMapComponent},
  {path:"scheduling-Reports", component:SchedulingReportsComponent},

  {path:"costing-settings", component:CostingSettingsComponent},
  {path:"costing-models", component:CostingModelsComponent},
  {path:"costing-entries", component:CostingEntriesComponent},
  {path:"costing-reports", component:CostingReportsComponent},

  {path:"notification-settings", component:NotificationSettingsComponent},
  {path:"notification-emails", component:NotificationEmailsComponent},
  {path:"notification-sms", component:NotificationSmsComponent},
  {path:"notification-channels", component:NotificationChannelsComponent},
  {path:"notification-reports", component:NotificationReportsComponent},

  {path:"customerrelationship-settings", component:CustomerrelationshipSettingsComponent},
  {path:"customerrelationship-entries", component:CustomerrelationshipEntriesComponent},
  {path:"customerrelationship-reports", component:CustomerrelationshipReportsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
