import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class AutocompleteDirective {

  @Output() public clickOutside = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    if (targetElement.id === "search") {return;}
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!isClickedInside) {
      this.clickOutside.emit(null);
    }
  }

}
