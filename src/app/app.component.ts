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
<!--            <ng-container *ylLoop="let name; when users; age 45;template tmpl"></ng-container>-->
<!--            word 'user' here is $implicit-->
            <ng-container *ylLoop="let user of users;template tmpl">
                {{user | json}}
                
            </ng-container>
            
          <ng-template #tmpl>
              <h3>Template</h3>
          </ng-template>

           
        </div>



    `,
    styles: []
})
export class AppComponent implements AfterViewInit {
   users = [
       {name: 'Nit'},
       {name: 'Alex'},
       {name: 'Jojo'}
   ];
    ngAfterViewInit(): void {


    }
}
