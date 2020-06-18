import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextsModule } from 'src/app/texts/texts.module';


@NgModule({
  declarations: [PageListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TextsModule
  ]
})
export class ClientsModule { }
