import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentsNewComponent } from './establishments-new.component';

const routes: Routes = [{ path: '', component: EstablishmentsNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentsNewRoutingModule { }
