import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduceRoutingModule } from './introduce-routing.module';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IntroduceRoutingModule,
    RouterModule
  ]
})
export class IntroduceModule { }
