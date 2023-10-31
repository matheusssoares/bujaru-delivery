import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SpecialtiesComponent } from './specialties.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [SpecialtiesComponent, ContentComponent],
  imports: [
    CommonModule,
    SpecialtiesRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpecialtiesModule { }
