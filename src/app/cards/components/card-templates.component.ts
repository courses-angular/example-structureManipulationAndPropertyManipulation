import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ICardTemplateContext} from "../models/card.types";

@Component({
  template: `
   <ng-template #plainCard let-card>
     <div class="card">
       <div class="card-body">
         <h5 class="card-title">{{card.title}}</h5>
           <p class="card-text">{{card.text}}</p>
       </div>
      
     </div>
   </ng-template>
   
   
   <ng-template #primaryCard let-card>
     <div class="card border-primary">
       <div class="card-header">{{card.header}}</div>
       <div class="card-body text-primary">
         <h5 class="card-title">{{card.title}}</h5>
         <p class="card-text">{{card.text}}</p>
         <p class="card-text text-small">{{card.smallText}}</p>
       </div>
     </div>
   </ng-template>
  `,
  styles: []
})
export class CardTemplatesComponent  {
 @ViewChild('plainCard',{static: true}) plainCardTemplate: TemplateRef<ICardTemplateContext>
 @ViewChild('primaryCard',{static: true}) primaryCardTemplate: TemplateRef<ICardTemplateContext>
}
