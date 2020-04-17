import {Directive, Input, OnInit, TemplateRef} from '@angular/core';

@Directive({
    selector: '[ylLoop]'
})
export class LoopDirective implements OnInit {
    // @Input('ylLoopWhen') value
    // @Input('ylLoopAge') age;
    // @Input('ylLoopTemplate') tmpl: TemplateRef<any>;

    @Input('ylLoopOf') value
    @Input('ylLoopTemplate') tmpl: TemplateRef<any>;

    constructor() {
    }

    ngOnInit(): void {
        // console.log(this.value)
        // console.log(this.age)
        // console.log(this.tmpl)

        console.log(this.value)
        console.log(this.tmpl)
    }
}
