import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    Injector,
    Input,
    OnInit,
    Renderer2, TemplateRef,
    ViewContainerRef
} from '@angular/core';
import {ECardTypes, ICard, ICardTemplateContext} from "../models/card.types";
import {CardTemplatesComponent} from "./card-templates.component";

@Directive({
    selector: '[ylDeck]'
})
export class DeckDirective implements OnInit {
    @Input('ylDeckFor') cards: ICard[];
    @Input('ylDeckPrimary') primaryTemplate: TemplateRef<ICardTemplateContext>

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
        this.renderer.insertBefore(parentNode, wrapper, this.hostElement.nativeElement);
        this.renderer.removeChild(parentNode, this.hostElement.nativeElement);
        // Insert 'ng-container' into 'card-deck' div
        this.renderer.appendChild(wrapper, this.hostElement.nativeElement);


        // Create CardTemplateComponent Dynamicly

        const cardComponentFactory = this.cfr.resolveComponentFactory<CardTemplatesComponent>(CardTemplatesComponent);

        const cardTemplatesComponent: ComponentRef<CardTemplatesComponent> = cardComponentFactory.create(this.injector)

        this.cards.forEach(card => {
            this.renderTemplate(card, cardTemplatesComponent)
        })
    }

    private renderTemplate(card: ICard, templateComponent: ComponentRef<CardTemplatesComponent>) {
        switch (card.type) {
            case ECardTypes.Plain:
                this.viewContainer.createEmbeddedView(this.primaryTemplate|| templateComponent.instance.plainCardTemplate,{$implicit: card})
                break;
            case ECardTypes.Primary:
                this.viewContainer.createEmbeddedView(templateComponent.instance.primaryCardTemplate,{$implicit: card})
                break;
        }
    }
}
