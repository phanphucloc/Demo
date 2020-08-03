import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnDestroy {
  public eventDestoy: Subject<string>;
  public eventClose: Subject<string>;

  constructor() {
    this.eventDestoy = new Subject<string>();
    this.eventClose = new Subject<string>();
  }

  ngOnInit(): void {
  }
  destroyComponent(): void{
    this.eventClose.complete();
  }
  ngOnDestroy(): void{
    this.eventDestoy.complete();
  }
}
