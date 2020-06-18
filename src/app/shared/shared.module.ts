import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, ColorStateDirective, TableDarkComponent],
  imports: [
    CommonModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent,
    TotalPipe,
    ColorStateDirective
  ]
})
export class SharedModule { }
