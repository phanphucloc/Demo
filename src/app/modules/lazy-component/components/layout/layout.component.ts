import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  async createLazyComponent(): Promise<any>{
    const injector = this.viewContainerRef.injector;
    const {ChildComponent} = await import('../child/child.component');

    const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver);
    const componentFactory = cfr.resolveComponentFactory(ChildComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector);

    componentRef.instance.eventDestoy.toPromise().then((res) => {

      // Write your code here when you need to do something when this component is destroyed

    });
  }
}
