import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { EstablishmentsNewRoutingModule } from './establishments-new-routing.module';
import { EstablishmentsNewComponent } from './establishments-new.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [EstablishmentsNewComponent, ContentComponent],
  imports: [
    CommonModule,
    EstablishmentsNewRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ]
})
export class EstablishmentsModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
