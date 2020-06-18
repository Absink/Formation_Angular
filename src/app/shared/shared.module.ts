import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, ColorStateDirective, TableDarkComponent, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent,
    TotalPipe,
    ColorStateDirective,
    BtnComponent
  ]
})
export class SharedModule { }
