import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePageComponent } from './component/table-page/table-page.component';


const routes: Routes = [
  { path: 'table-page', component: TablePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
