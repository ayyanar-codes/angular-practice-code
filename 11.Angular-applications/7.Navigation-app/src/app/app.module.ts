import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './account/accounts/accounts.component';
import { PayrollComponent } from './payroll-module/payroll-components/payroll/payroll.component';

import { InventoryComponent } from './inventory-module/Inventory-components/inventory/inventory.component';
import { ProductionComponent } from './production-module/production-components/production/production.component';
import { EstimationComponent } from './estimation-module/estimation-components/estimation/estimation.component';
import { SchendulingComponent } from './scheduling-module/scheduling-components/schenduling/schenduling.component';
import { CostingComponent } from './costing-module/costing-components/costing/costing.component';
import { CustomerrelationshipComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship/customerrelationship.component';
import { NotificationComponent } from './notification-module/notification-components/notification/notification.component';
import { AccountsSettingsComponent } from './account/accounts-settings/accounts-settings.component';
import { AccountsNavComponent } from './account/accounts-nav/accounts-nav.component';
import { AccountsEntriesComponent } from './account/accounts-entries/accounts-entries.component';
import { AccountsJournalsComponent } from './account/accounts-journals/accounts-journals.component';
import { AccountsLedgersComponent } from './account/accounts-ledgers/accounts-ledgers.component';
import { AccountsAttributesComponent } from './account/accounts-attributes/accounts-attributes.component';
import { AccountsCheckLeafsComponent } from './account/accounts-check-leafs/accounts-check-leafs.component';
import { AccountsBalanceSheetComponent } from './account/accounts-balance-sheet/accounts-balance-sheet.component';
import { AccountsProfitAndLossComponent } from './account/accounts-profit-and-loss/accounts-profit-and-loss.component';
import { AccountsReportsComponent } from './account/accounts-reports/accounts-reports.component';
import { PayrollNavComponent } from './payroll-module/payroll-nav/payroll-nav.component';
import { PayrollSettingsComponent } from './payroll-module/payroll-components/payroll-settings/payroll-settings.component';
import { PayrollEmployeesComponent } from './payroll-module/payroll-components/payroll-employees/payroll-employees.component';
import { PayrollAttendanceComponent } from './payroll-module/payroll-components/payroll-attendance/payroll-attendance.component';
import { PayrollEsiPfComponent } from './payroll-module/payroll-components/payroll-esi-pf/payroll-esi-pf.component';
import { PayrollTimesheetComponent } from './payroll-module/payroll-components/payroll-timesheet/payroll-timesheet.component';
import { PayrollReportsComponent } from './payroll-module/payroll-components/payroll-reports/payroll-reports.component';

import { SalesBillingComponent } from './sales-module/sales-components/sales-billing/sales-billing.component';
import { SalesCustomersComponent } from './sales-module/sales-components/sales-customers/sales-customers.component';
import { SalesRequestsComponent } from './sales-module/sales-components/sales-requests/sales-requests.component';
import { SalesOrdersComponent } from './sales-module/sales-components/sales-orders/sales-orders.component';
import { SalesReportsComponent } from './sales-module/sales-components/sales-reports/sales-reports.component';
import { SalesReturnComponent } from './sales-module/sales-components/sales-return/sales-return.component';
import { SalesSettingsComponent } from './sales-module/sales-components/sales-settings/sales-settings.component';
import { SalesShippingComponent } from './sales-module/sales-components/sales-shipping/sales-shipping.component';
import { SalesNavComponent } from './sales-module/sales-nav/sales-nav.component';
import { InventorySettingsComponent } from './inventory-module/Inventory-components/inventory-settings/inventory-settings.component';
import { InventoryOpeningComponent } from './inventory-module/Inventory-components/inventory-opening/inventory-opening.component';
import { InventoryGroupsComponent } from './inventory-module/Inventory-components/inventory-groups/inventory-groups.component';
import { InventoryProductsComponent } from './inventory-module/Inventory-components/inventory-products/inventory-products.component';
import { InventoryGrsComponent } from './inventory-module/Inventory-components/inventory-grs/inventory-grs.component';
import { InventoryEntriesComponent } from './inventory-module/Inventory-components/inventory-entries/inventory-entries.component';
import { InventoryConsumptionsComponent } from './inventory-module/Inventory-components/inventory-consumptions/inventory-consumptions.component';
import { InventoryReportsComponent } from './inventory-module/Inventory-components/inventory-reports/inventory-reports.component';
import { InventoryNavComponent } from './inventory-module/inventory-nav/inventory-nav.component';
import { EstimationSettingsComponent } from './estimation-module/estimation-components/estimation-settings/estimation-settings.component';
import { EstimationRawMaterialsComponent } from './estimation-module/estimation-components/estimation-raw-materials/estimation-raw-materials.component';
import { EstimationConsumablesComponent } from './estimation-module/estimation-components/estimation-consumables/estimation-consumables.component';
import { EstimationProcessesComponent } from './estimation-module/estimation-components/estimation-processes/estimation-processes.component';
import { EstimationModelsComponent } from './estimation-module/estimation-components/estimation-models/estimation-models.component';
import { EstimationComputeComponent } from './estimation-module/estimation-components/estimation-compute/estimation-compute.component';
import { EstimationReportsComponent } from './estimation-module/estimation-components/estimation-reports/estimation-reports.component';
import { EstimationNavComponent } from './estimation-module/estimation-nav/estimation-nav.component';
import { ProductionSettingsComponent } from './production-module/production-components/production-settings/production-settings.component';
import { ProductionPurchaseRequestsComponent } from './production-module/production-components/production-purchase-requests/production-purchase-requests.component';
import { ProductionEntiresComponent } from './production-module/production-components/production-entires/production-entires.component';
import { ProductionServiceRequestsComponent } from './production-module/production-components/production-service-requests/production-service-requests.component';
import { ProductionReportsComponent } from './production-module/production-components/production-reports/production-reports.component';
import { ProductionNavComponent } from './production-module/production-nav/production-nav.component';
import { SchedulingSettingsComponent } from './scheduling-module/scheduling-components/scheduling-settings/scheduling-settings.component';
import { SchedulingProductionRequestApprovalComponent } from './scheduling-module/scheduling-components/scheduling-production-request-approval/scheduling-production-request-approval.component';
import { SchedulingEntriesMapComponent } from './scheduling-module/scheduling-components/scheduling-entries-map/scheduling-entries-map.component';
import { SchedulingReportsComponent } from './scheduling-module/scheduling-components/scheduling-reports/scheduling-reports.component';
import { SchedulingNavsComponent } from './scheduling-module/scheduling-navs/scheduling-navs.component';
import { CostingSettingsComponent } from './costing-module/costing-components/costing-settings/costing-settings.component';
import { CostingModelsComponent } from './costing-module/costing-components/costing-models/costing-models.component';
import { CostingEntriesComponent } from './costing-module/costing-components/costing-entries/costing-entries.component';
import { CostingReportsComponent } from './costing-module/costing-components/costing-reports/costing-reports.component';
import { CostingNavComponent } from './costing-module/costing-nav/costing-nav.component';
import { NotificationSettingsComponent } from './notification-module/notification-components/notification-settings/notification-settings.component';
import { NotificationEmailsComponent } from './notification-module/notification-components/notification-emails/notification-emails.component';
import { NotificationSmsComponent } from './notification-module/notification-components/notification-sms/notification-sms.component';
import { NotificationChannelsComponent } from './notification-module/notification-components/notification-channels/notification-channels.component';
import { NotificationReportsComponent } from './notification-module/notification-components/notification-reports/notification-reports.component';
import { NotificationNavComponent } from './notification-module/notification-nav/notification-nav.component';
import { CustomerrelationshipSettingsComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship-settings/customerrelationship-settings.component';
import { CustomerrelationshipEntriesComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship-entries/customerrelationship-entries.component';
import { CustomerrelationshipReportsComponent } from './customerrelationship-module/customerrelationship-components/customerrelationship-reports/customerrelationship-reports.component';
import { CustomerrelationshipNavComponent } from './customerrelationship-module/customerrelationship-nav/customerrelationship-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    PayrollComponent,
    InventoryComponent,
    ProductionComponent,
    EstimationComponent,
    SchendulingComponent,
    CostingComponent,
    CustomerrelationshipComponent,
    NotificationComponent,
    AccountsSettingsComponent,
    AccountsNavComponent,
    AccountsEntriesComponent,
    AccountsJournalsComponent,
    AccountsLedgersComponent,
    AccountsAttributesComponent,
    AccountsCheckLeafsComponent,
    AccountsBalanceSheetComponent,
    AccountsProfitAndLossComponent,
    AccountsReportsComponent,
    PayrollNavComponent,
    PayrollSettingsComponent,
    PayrollEmployeesComponent,
    PayrollAttendanceComponent,
    PayrollEsiPfComponent,
    PayrollTimesheetComponent,
    PayrollReportsComponent,
    SalesNavComponent,
    SalesBillingComponent,
    SalesCustomersComponent,
    SalesRequestsComponent,
    SalesOrdersComponent,
    SalesReportsComponent,
    SalesReturnComponent,
    SalesSettingsComponent,
    SalesShippingComponent,
    SalesNavComponent,
    InventorySettingsComponent,
    InventoryOpeningComponent,
    InventoryGroupsComponent,
    InventoryProductsComponent,
    InventoryGrsComponent,
    InventoryEntriesComponent,
    InventoryConsumptionsComponent,
    InventoryReportsComponent,
    InventoryNavComponent,
    EstimationSettingsComponent,
    EstimationRawMaterialsComponent,
    EstimationConsumablesComponent,
    EstimationProcessesComponent,
    EstimationModelsComponent,
    EstimationComputeComponent,
    EstimationReportsComponent,
    EstimationNavComponent,
    ProductionSettingsComponent,
    ProductionPurchaseRequestsComponent,
    ProductionEntiresComponent,
    ProductionServiceRequestsComponent,
    ProductionReportsComponent,
    ProductionNavComponent,
    SchedulingSettingsComponent,
    SchedulingProductionRequestApprovalComponent,
    SchedulingEntriesMapComponent,
    SchedulingReportsComponent,
    SchedulingNavsComponent,
    CostingSettingsComponent,
    CostingModelsComponent,
    CostingEntriesComponent,
    CostingReportsComponent,
    CostingNavComponent,
    NotificationSettingsComponent,
    NotificationEmailsComponent,
    NotificationSmsComponent,
    NotificationChannelsComponent,
    NotificationReportsComponent,
    NotificationNavComponent,
    CustomerrelationshipSettingsComponent,
    CustomerrelationshipEntriesComponent,
    CustomerrelationshipReportsComponent,
    CustomerrelationshipNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
