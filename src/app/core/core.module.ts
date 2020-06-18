import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    TextsModule
  ],exports: [
    HeaderComponent, NavComponent, FooterComponent
  ]
})
export class CoreModule { }
