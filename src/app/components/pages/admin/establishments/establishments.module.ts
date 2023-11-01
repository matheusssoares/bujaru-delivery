import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { EstablishmentsComponent } from './establishments.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [EstablishmentsComponent, ContentComponent],
  imports: [
    CommonModule,
    EstablishmentsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ]
})
export class EstablishmentsModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
