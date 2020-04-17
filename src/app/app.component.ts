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

            <ng-container *ylDeck="let card for cards"></ng-container>
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
