import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { TableStripedComponent } from './components/table-striped/table-striped.component';
import { TemplatesModule } from '../templates/templates.module';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, ColorStateDirective, TableDarkComponent, BtnComponent, TableStripedComponent],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    TextsModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent,
    TableStripedComponent,
    TotalPipe,
    ColorStateDirective,
    BtnComponent,
    TemplatesModule,
    TextsModule
  ]
})
export class SharedModule { }
