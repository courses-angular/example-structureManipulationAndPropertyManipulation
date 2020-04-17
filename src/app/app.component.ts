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
<!--            This ng-container get  'condition' as $implicit of template context-->
            <ng-container #container></ng-container>

            <!--            *ngIf create Template -->
            
<!--            Use alias (as value) for no duplicates in <ng-container>-->
            <ng-container *ngIf="condition as value">{{value}}</ng-container>
        </div>



    `,
    styles: []
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef
    @ViewChild(TemplateRef) template: TemplateRef<any>
    condition: string;


    ngOnInit(): void {
        setTimeout(() => {
            this.condition = 'Resolved!!'
        }, 3000)
    }

    ngAfterViewInit(): void {
        console.log(this.template)
        this.container.createEmbeddedView(this.template);

    }
}
