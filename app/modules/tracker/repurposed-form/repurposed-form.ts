import {Component, OnInit} from '@angular/core';
import {InputText, Button, SelectButton, SelectItem, Dialog} from 'primeng/primeng';
//import {Log} from './app/modules/tracker/log';

import {MenuItem} from '../menuItem';
import {MenuItemService} from '../menuItem.service';

@Component({
    selector: 'repurposed-form',
    templateUrl: './app/modules/tracker/repurposed-form/repurposed-form.html',
    directives: [InputText, Button, SelectButton, Dialog],
    //styleUrls: ['./app/assets/css/styles.css']
})

export class RepurposedForm implements OnInit {
    menu: MenuItem[] = [];

    //TODO instantiate new object of log
    itemName: string;
    unit: string;
    quantity: number;

    units: SelectItem[];

    display: boolean = false;
    
    constructor(
        private menuItemService: MenuItemService){
            this.units = [];
            this.units.push({label:'lbs', value:'lbs'});
            this.units.push({label:'ozs', value:'ozs'});
            this.units.push({label:'ea', value:'ea'});
    }

    ngOnInit() {
        this.menuItemService.getMenuItems()
            .then(menu => this.menu = menu);
    }

    submitLog(){
        console.log(this.itemName);
        console.log(this.quantity + " " + this.unit);
    }

    showDialog() {
        this.display = true;
    }
    
    keypressed(key) {
        console.log('Key pressed: ' + key);
        this.quantity = key;
    }

    itemButtonClick(name) {
        console.log(name);
        this.itemName = name;
    }

}