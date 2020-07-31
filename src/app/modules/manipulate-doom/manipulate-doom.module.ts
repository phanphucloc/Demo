import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { ManipulateDoomRoutingModule } from './manipulate-doom-routing.module';
import { ChildComponent } from './components/child/child.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LayoutComponent, ChildComponent],
  imports: [
    CommonModule,
    ManipulateDoomRoutingModule,
    RouterModule
  ],
})
export class ManipulateDoomModule { }
