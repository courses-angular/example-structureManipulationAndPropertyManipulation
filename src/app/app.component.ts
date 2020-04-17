import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';


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
            <ng-container *ylLoop="let name; when users; age 45"></ng-container>
            
          

           
        </div>



    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
   users = [];
    ngAfterViewInit(): void {


    }
}
