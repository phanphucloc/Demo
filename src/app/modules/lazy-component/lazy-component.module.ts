import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentRoutingModule } from './lazy-component-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LazyComponentRoutingModule,
    RouterModule
  ]
})
export class LazyComponentModule { }
