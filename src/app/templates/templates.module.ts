import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './components/template-a/template-a.component';
import { TemplateBComponent } from './components/template-b/template-b.component';
import { TextsModule } from '../texts/texts.module';
import { TemplateCComponent } from './components/template-c/template-c.component';



@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent, TemplateCComponent],
  imports: [
    CommonModule,
    TextsModule
  ],
  exports: [TemplateAComponent, TemplateBComponent, TemplateCComponent]
})
export class TemplatesModule { }
