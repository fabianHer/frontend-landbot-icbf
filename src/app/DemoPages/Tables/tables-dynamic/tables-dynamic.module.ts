import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesDynamicComponent } from './tables-dynamic.component';
import { TablesDynamicRoutingModule } from './tables-dynamic-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';



@NgModule({
imports: [
    CommonModule, NgbModule,
    PageTitleModule, TablesDynamicRoutingModule
],
declarations: [TablesDynamicComponent],
exports: [TablesDynamicComponent]
})
export class TablesDinamicModule { }