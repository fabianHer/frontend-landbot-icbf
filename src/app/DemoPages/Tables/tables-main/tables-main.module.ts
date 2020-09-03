import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesMainComponent } from './tables-main.component';
import { TablesMainRoutingModule } from './tables-main-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import { DynamicModule } from '../dynamic/dynamic.module';
import { RegularModule } from '../regular/regular.module';
import { TablesDinamicModule } from '../tables-dynamic/tables-dynamic.module';



@NgModule({
  imports: [
    CommonModule, NgbModule, RegularModule, DynamicModule, TablesDinamicModule,
    TablesMainRoutingModule, PageTitleModule,
  ],
  declarations: [TablesMainComponent]
})
export class TablesMainModule { }
