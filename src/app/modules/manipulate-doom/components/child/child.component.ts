import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() listInputCustom: TemplateRef<any>;
  title= 'FORM REGISTER';
  constructor() { }

  ngOnInit(): void {
  }

}
