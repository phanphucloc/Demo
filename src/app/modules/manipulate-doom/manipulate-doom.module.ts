import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { ManipulateDoomRoutingModule } from './manipulate-doom-routing.module';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [LayoutComponent, ChildComponent],
  imports: [
    CommonModule,
    ManipulateDoomRoutingModule,
  ],
})
export class ManipulateDoomModule { }
