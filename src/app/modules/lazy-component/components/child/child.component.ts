import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnDestroy {
  public eventDestoy: Subject<string>;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.eventDestoy.complete();
  }
}
