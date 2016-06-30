import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
//import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    //disableDeprecatedForms(),
    //provideForms()
]);