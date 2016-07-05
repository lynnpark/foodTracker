import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {Header} from './header';
import {RepurposedForm} from './modules/tracker/repurposed-form/repurposed-form';
import {FoodTracker} from './modules/tracker/food-tracker/food-tracker';
import {ShortageForm} from './modules/tracker/shortage-form/shortage-form';
import {WasteForm} from './modules/tracker/waste-form/waste-form';

import {MenuItemService} from './modules/tracker/menuItem.service';


@Component({
    selector: 'my-app',
    template: `
        <header></header>
        <p-tabView>
            <p-tabPanel header="Repurposed" leftIcon="fa-recycle">
                <repurposed-form></repurposed-form>
            </p-tabPanel>
            <p-tabPanel header="Waste" leftIcon="fa-trash-o">
                <waste-form></waste-form>
            </p-tabPanel>
            <p-tabPanel header="Shortage" leftIcon="fa-battery-empty">
                <shortage-form></shortage-form>
            </p-tabPanel>
        </p-tabView>
    `,
    directives: [ROUTER_DIRECTIVES, RepurposedForm, ShortageForm, WasteForm, FoodTracker, TabView, TabPanel, Header],
    providers: [ROUTER_PROVIDERS, MenuItemService],
    styleUrls: ['./app/assets/css/styles.css']
})



export class AppComponent {

}
