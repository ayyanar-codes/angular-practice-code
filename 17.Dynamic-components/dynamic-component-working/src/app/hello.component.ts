import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector:'hello',
    template:'<h2>Hello all  {{data.name}}</h2>',
    styles:['h2{font-family:Lato;}']
})
export class HelloComponent implements OnInit{
    @Input() data!:any;
    age:number=12;

    ngOnInit(): void {
        console.log(this.data);
    }

}


@Component({
    selector:'hi',
    template:'<h2>hi all</h2>',
    styles:['h2{font-family:Lato;}']
})
export class HiComponent{
    @Input() name!:string;
}