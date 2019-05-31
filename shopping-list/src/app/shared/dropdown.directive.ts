import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
constructor(private elRef: ElementRef, private renderer: Renderer2) {}
@HostBinding('class.open') isOpen= false;
@HostListener('document:click', ['$event']) openDropdown(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; //it available turn off dropdown on click anywhere
    
    /* RENDERER */
    // this.elRef.nativeElement.classList.contains('open') ?
    // this.renderer.removeClass(this.elRef.nativeElement, 'open')
    // : this.renderer.addClass(this.elRef.nativeElement, 'open')
}
}