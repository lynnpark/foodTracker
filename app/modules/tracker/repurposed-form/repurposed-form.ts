import {Component} from '@angular/core';
import {InputText, Button, SelectButton, SelectItem, Dialog} from 'primeng/primeng';
//import {Log} from './app/modules/tracker/log';

@Component({
    selector: 'repurposed-form',
    templateUrl: './app/modules/tracker/repurposed-form/repurposed-form.html',
    directives: [InputText, Button, SelectButton, Dialog],
    styleUrls: ['./app/assets/css/styles.css']
})

export class RepurposedForm {

    //TODO instantiate new object of log
    itemName: string;
    unit: string;

    units: SelectItem[];

    display: boolean = false;
    
    constructor(){
        this.units = [];
        this.units.push({label:'lbs', value:'lbs'});
        this.units.push({label:'ozs', value:'ozs'});
        this.units.push({label:'ea', value:'ea'});
    }

    submitLog(){
        console.log(this.itemName);
    }

    showDialog() {
        this.display = true;
    }
}