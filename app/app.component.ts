import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {Header} from './header';
import {RepurposedForm} from '../tracker/repurposed-form/repurposed-form';
import {FoodTracker} from '../tracker/food-tracker/food-tracker';
import {ShortageForm} from '../tracker/shortage-form/shortage-form';
import {WasteForm} from '../tracker/waste-form/waste-form';


@Component({
    selector: 'my-app',
    template: `
        <header></header>
        <p-tabView>
            <p-tabPanel header="Food Tracker" leftIcon="fa-area-chart">
                <food-tracker></food-tracker>
            </p-tabPanel>
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
    providers: [ROUTER_PROVIDERS]
})



export class AppComponent {

}
