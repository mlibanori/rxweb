import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { EMAIL_ROUTING } from './email.routing';
import { EmailComponent } from './email.component';
import { EmailExtendedModule } from '../../../../assets/examples/email/email.module';
import { DisqusComponent } from '../../shared/disqus/disqus.component';

@NgModule({
  imports: [
    EMAIL_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, EmailExtendedModule, ClipboardModule],
  declarations: [EmailComponent,DisqusComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class EmailModule { }

