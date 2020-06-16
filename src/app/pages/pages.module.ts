import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './orders/components/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { PageHomeComponent } from './home/components/page-home/page-home.component';



@NgModule({
  declarations: [PageHomeComponent, PageListOrdersComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
