import {Component, OnInit} from '@angular/core';
import {InputText, Button, SelectButton, SelectItem, Dialog} from 'primeng/primeng';
import {MenuItem} from '../menuItem';
import {MenuItemService} from '../menuItem.service';

import {Fieldset} from 'primeng/primeng';

@Component({
    selector: 'repurposed-form',
    templateUrl: './app/modules/tracker/repurposed-form/repurposed-form.html',
    directives: [InputText, Button, SelectButton, Dialog],
    styleUrls: ['./app/assets/css/styles.css']
})

export class RepurposedForm implements OnInit {
    menu: MenuItem[] = [];
    
    itemName: string;
    unit: string;
    tempQ: string = '';
    quantity: number;
    
    pageone: boolean = true;
    pagetwo: boolean = false;

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

        if(key.toString().localeCompare("<") == 0) {
            this.tempQ = this.tempQ.slice(0, -1);
        }
        else if(key.toString().localeCompare(".") == 0){
            if(this.tempQ.indexOf(".") == -1)
                this.tempQ += key;
        }
        else if(key == 0){
            if(this.tempQ != '0')
                this.tempQ += key;
        }
        else {
            this.tempQ += key;
        }

        this.quantity = Number(this.tempQ);
        console.log(this.quantity);

        return false;
    }

    submitQuantity() {
        this.display = false;
        this.quantity = Number(this.tempQ);
        console.log(this.quantity);
    }

    itemButtonClick(name) {
        console.log(name);
        this.itemName = name;
    }

    nextPage(){
        this.pageone = false;
        this.pagetwo = true;
    }
    
    prevPage() {
        this.pageone = true;
        this.pagetwo = false;
    }

}