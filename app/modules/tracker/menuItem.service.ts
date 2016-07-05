import {MenuItem} from './menuItem';
import {MENU} from './mock-menu-data';
import {Injectable} from '@angular/core';

@Injectable()
export class MenuItemService {
    
    getMenuItems() {
        return Promise.resolve(MENU);
    }
    
    getMenuItem(id: number) {
        return this.getMenuItems().then(menu => menu.filter(menuItem => menuItem.id === id)[0]);
    }
    
}