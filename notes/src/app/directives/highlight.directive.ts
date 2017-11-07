import { Directive, ElementRef, Input, OnInit, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective{

    private element: HTMLElement;

    @Input() highlightcolor: string;

    constructor( el:ElementRef){
        this.element = el.nativeElement;
    }

    @HostListener('mouseenter') onmouseenter(){
        this.element.style.color = this.highlightcolor;
    }
    @HostListener('mouseleave') onmouseleave(){
        this.element.style.color = null;
    }
}
