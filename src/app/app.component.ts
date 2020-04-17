import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';


interface UserContext {
    $implicit: IUser,
    id: number
}

interface IUser {
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

        <ng-template #template let-user let-id="id">
            <h3>Some Content</h3>
            <span>User name: {{user.name}}</span>
            <br>
            <span>User age:{{user.age}}</span>
            <br>
            <span>Id:{{id}}</span>
        </ng-template>

    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
    @ViewChild('template') template: TemplateRef<UserContext>
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef

    ngAfterViewInit(): void {
        this.container.createEmbeddedView(this.template, {
            $implicit: {
                name: 'Nir',
                age: 28
            },
            id: 5
        })
    }
}
