import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { ColorStateDirective } from './directives/color-state.directive';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, ColorStateDirective],
  imports: [
    CommonModule
  ], exports: [
    TableLightComponent,
    TotalPipe,
    ColorStateDirective
  ]
})
export class SharedModule { }
