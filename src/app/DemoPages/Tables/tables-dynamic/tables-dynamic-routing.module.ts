import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesDynamicComponent } from './tables-dynamic.component';

const routes: Routes = [
{
    path: '',
    component: TablesDynamicComponent,
    data: {
    title: 'TablesMain'
    }
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class TablesDynamicRoutingModule { }