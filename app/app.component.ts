import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {RepurposedForm} from '../tracker/repurposed-form/repurposed-form';
import {FoodTracker} from '../tracker/food-tracker/food-tracker';


@Component({
    selector: 'my-app',
    template: `
        <h1>TODO: header</h1>
        <p-tabView>
            <p-tabPanel header="Food Tracker" leftIcon="fa-area-chart">
                <food-tracker></food-tracker>
            </p-tabPanel>
            <p-tabPanel header="Repurposed" leftIcon="fa-recycle">
                <repurposed-form></repurposed-form>
            </p-tabPanel>
            <p-tabPanel header="Waste" leftIcon="fa-trash-o">
            </p-tabPanel>
            <p-tabPanel header="Shortage" leftIcon="fa-battery-empty">
            </p-tabPanel>
        </p-tabView>
    `,
    directives: [ROUTER_DIRECTIVES, RepurposedForm, FoodTracker, TabView, TabPanel],
    providers: [ROUTER_PROVIDERS]
})



export class AppComponent {

}
