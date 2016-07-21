/*
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderBy implements PipeTransform {

    transform(input:any, args:string[]) : any {
        //todo

        return input;
    }
}*/

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "orderby"
})
export class LogPipe {
    transform(array: Array<string>, args: string): Array<string> {
            array.sort((a: string, b: string) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}