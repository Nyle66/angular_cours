import { Directive, ElementRef, Input, SimpleChanges, OnChanges } from "@angular/core";

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnChanges{

    private element: HTMLElement;
    @Input('appBackground') bgcolor: string;

    constructor(el : ElementRef){
        this.element = (el.nativeElement);
    }

    ngOnChanges(): void {
        this.element.style.backgroundColor = this.bgcolor;
    }

}