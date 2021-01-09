import { Directive, ElementRef, Renderer2, Input, HostListener } from "@angular/core";

// [setColor] is directive name that will be used for Property-Binding
@Directive({
  selector: '[setColor]'
})
export class ColorDirective {
  // these injection will be resolved using BrowserModule
  // imported in imports arrayn of AppModulemdecorated with @NgModule
  constructor(private ele: ElementRef, private renderer: Renderer2 ){
    this.setColor = '';
  }
// the public property mapped with selector
  @Input('setColor') setColor: string;

  // business logic method
  private applyColor(color:string): void {
    // change the background color of the element on which the
    // directive is applied
    this.renderer.setStyle(this.ele.nativeElement, "backgroundColor", color);
  }

  // methods those hosts events to activate directive
  @HostListener('mouseenter')
  onMouseEnter():void{
    this.applyColor(this.setColor);
  }
  @HostListener('mouseleave')
  onMouseLeave():void{
    this.applyColor(null);
  };
}
