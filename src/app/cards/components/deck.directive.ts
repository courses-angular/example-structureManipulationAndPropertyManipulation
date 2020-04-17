import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    Injector,
    Input, OnInit,
    Renderer2,
    ViewContainerRef
} from '@angular/core';
import {ICard} from "../models/card.types";

@Directive({
    selector: '[ylDeck]'
})
export class DeckDirective implements OnInit {
    @Input('ylDeckFor') cards: ICard[];

    constructor(
        private viewContainer: ViewContainerRef,
        private renderer: Renderer2,
        private cfr: ComponentFactoryResolver,
        private injector: Injector,
        private hostElement: ElementRef
    ) {
    }

    ngOnInit(): void {
        const parentNode = this.renderer.parentNode(this.hostElement.nativeElement); //get parent element node of <ng-container>
        console.log('Parent node of hostElement ', parentNode);

        // Insert 'card-deck' div into 'container'
        const wrapper = this.renderer.createElement('div');
        this.renderer.addClass(wrapper, 'card-deck');
        this.renderer.insertBefore(parentNode,wrapper,this.hostElement.nativeElement);
        this.renderer.removeChild(parentNode,this.hostElement.nativeElement);
        // Insert 'ng-container' into 'card-deck' div
        this.renderer.appendChild(wrapper,this.hostElement.nativeElement);

    }

}
