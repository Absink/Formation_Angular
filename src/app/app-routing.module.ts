import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: PageHomeComponent },
  // { path: 'orders', component: PageListOrdersComponent },
  { path: 'orders', loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'clients', loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
