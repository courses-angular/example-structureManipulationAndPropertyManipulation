import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';


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
        </div>


        <ng-container #container></ng-container>

<!--Shorter way-->
        <ng-template [ngTemplateOutlet]="template" 
                     [ngTemplateOutletContext]="{$implicit: {name: 'Nir'}}">
        </ng-template>
<!--Longer way-->
        <ng-template #template let-user let-id="id">
            <h3>Some Content</h3>
            <span>User Id:{{user.id}}</span>
            <br>
            <span>User name: {{user.name}}</span>
            <br>
            <span>User age:{{user.age}}</span>
        </ng-template>

    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
    @ViewChild('template') template: TemplateRef<UserContext>
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef

    users: IUser[] = [
        {name: 'Igor', age: 30, id: 1},
        {name: 'Nir', age: 22, id: 2},
        {name: 'Alex', age: 34, id: 3}
    ]

    ngAfterViewInit(): void {
        this.users.forEach(user => {
            this.container.createEmbeddedView(this.template, {
                $implicit: user,

            })
        })

    }
}
