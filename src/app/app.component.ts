import {AfterViewInit, Component} from '@angular/core';
import {ECardTypes, ICard} from "./cards/models/card.types";


interface UserContext {
    $implicit: IUser,
}

interface IUser {
    id: number;
    name: string;
    age: number;
}

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <h1 class="display-1">Angular
                <span class="text-muted">Master Class</span>
            </h1>

            <ng-container *ylDeck="let card for cards;primary altPrimary"></ng-container>
            
            <ng-template #altPrimary let-card>
                <div class="card border-success mb-3" style="max-width: 18rem;">
                    <div class="card-header">Header</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">{{card.title}}</h5>
                        <p class="card-text">{{card.text}}</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Footer</div>
                </div>  
            </ng-template>
        </div>
    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
   cards: ICard[] = [
       {
           type: ECardTypes.Plain,
           title: 'The title',
           text: 'The text'
       },
       {
           type: ECardTypes.Plain,
           title: 'Another title',
           text: 'Another text'
       },
       {
           type: ECardTypes.Primary,
           title: 'Primary card',
           text: 'Primary card text',
           header: 'Primary card header',
           smallText: 'Some small text'

       }
   ];
    ngAfterViewInit(): void {


    }
}
