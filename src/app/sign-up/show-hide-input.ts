import {Directive,HostBinding} from '@angular/core';

@Directive({
    selector:'[show-hide-input]'
})

export class ShowHideInput{

    @HostBinding() type:String;

    constructor(){
        this.type='password';
    }

    changeType(type:string){
        this.type=type;
    }
}
