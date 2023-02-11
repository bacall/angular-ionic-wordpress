import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceFormatPipe } from '../pipes/price-format.pipe';
import { TypeViviendaPipe } from '../pipes/type-vivienda.pipe';
import { RemoveWordsPipe } from '../pipes/remove-words.pipe';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';


@NgModule({
  declarations: [PriceFormatPipe, TypeViviendaPipe, RemoveWordsPipe, SanitizeUrlPipe, StripHtmlPipe, SanitizeHtmlPipe ],
  imports: [
    CommonModule
  ],
  exports: [PriceFormatPipe, TypeViviendaPipe, RemoveWordsPipe, SanitizeUrlPipe, StripHtmlPipe, SanitizeHtmlPipe ]
})
export class SharedpipesModule { }

