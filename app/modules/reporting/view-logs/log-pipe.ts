import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderBy implements PipeTransform {

    transform(input:any, args:string[]) : any {
        //todo

        return input;
    }
}