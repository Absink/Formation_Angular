import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextsModule } from 'src/app/texts/texts.module';
import { FormAddClientComponent } from './components/form-add-client/form-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';


@NgModule({
  declarations: [PageListClientsComponent, FormAddClientComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    SharedModule,
    TextsModule
  ]
})
export class ClientsModule { }
