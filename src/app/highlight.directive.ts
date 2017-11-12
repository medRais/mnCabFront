import { Directive, HostListener, HostBinding, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  private backgroundColor = 'green';

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  @Input() defaultColor : string;
  @Input() highlightColor: string;

  constructor(private elementRef: ElementRef) {
    //this.elementRef.nativeElement.style.backgroundColor = "green";
  }

}
