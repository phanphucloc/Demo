import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduceRoutingModule } from './introduce-routing.module';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    IntroduceRoutingModule,
  ]
})
export class IntroduceModule { }
