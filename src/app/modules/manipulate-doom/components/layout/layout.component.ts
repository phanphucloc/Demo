import { Component, OnInit, ViewChild, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  @ViewChild('elementRef', {read: ElementRef}) elementRef: ElementRef;
  @ViewChild('templateRef') templateRef: TemplateRef<any>;
  resultTemplateRef: string;
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  constructor() { }

  ngOnInit(): void {
  }




  // -----------------------------------------------------------------
  // ------------------------  ElementRef  ---------------------------
  // -----------------------------------------------------------------


  // You can use ElementRef to get basic information like selector in javarscript
  elementRefClick(): void{
    const resultElementRef = this.elementRef.nativeElement.textContent;
    alert('result: ' + resultElementRef);
    console.log(this.elementRef.nativeElement);
  }

  // Add class blue color
  elementRefAddClassBlueColor(): void{
    this.elementRef.nativeElement.className = 'blue';
    console.log(this.elementRef.nativeElement);
  }

  // Add class green color
  elementRefAddClassGreenColor(): void{
    this.elementRef.nativeElement.className = 'green';
    console.log(this.elementRef.nativeElement);
  }

  // Add class yellow color
  elementRefAddClassYellowColor(): void{
    this.elementRef.nativeElement.className = 'yellow';
    console.log(this.elementRef.nativeElement);
  }

  // remove class color element
  elementRefRemoveClassColor(): void{
    this.elementRef.nativeElement.className = '';
    console.log(this.elementRef.nativeElement);
  }








  // -----------------------------------------------------------------
  // -----------------------  TemplateRef  ---------------------------
  // -----------------------------------------------------------------

  templateRefClick(): void{
    const resultTemplateRef = this.templateRef.elementRef.nativeElement.textContent;
    alert('result: ' + resultTemplateRef);
  }









  // -----------------------------------------------------------------
  // ----------------------  ViewContainerRef  -----------------------
  // -----------------------------------------------------------------

  // Create embeddedView from templateRef and insert into containerRef
  createEmbeddedView(): void{
    const embeddedView = this.templateRef.createEmbeddedView(null);
    this.viewContainerRef.clear();
    this.viewContainerRef.insert(embeddedView);
  }

  // Create host view (from a component)
  createHostView(): void{
    this.viewContainerRef.clear();
    const injector = this.viewContainerRef.injector;

    const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver);
    const componentFactory = cfr.resolveComponentFactory(ChildComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector);

    // We can call variables to get values ​​of or we can change their values ​​and similar to functions
    // For EX:
    componentRef.instance.title = 'FROM CONFIRMATION SCHOLARSHIP';
  }
}
