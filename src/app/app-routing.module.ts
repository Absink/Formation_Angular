import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListOrdersComponent } from './pages/orders/components/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './pages/page-not-found/components/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/home/components/page-home/page-home.component';



const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: PageHomeComponent },
  { path: "orders", component: PageListOrdersComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
