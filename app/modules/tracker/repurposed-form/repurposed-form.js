"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var primeng_1 = require('primeng/primeng');
//import {Log} from './app/modules/tracker/log';
var RepurposedForm = (function () {
    function RepurposedForm() {
        this.display = false;
        this.units = [];
        this.units.push({ label: 'lbs', value: 'lbs' });
        this.units.push({ label: 'ozs', value: 'ozs' });
        this.units.push({ label: 'ea', value: 'ea' });
    }
    RepurposedForm.prototype.submitLog = function () {
        console.log(this.itemName);
    };
    RepurposedForm.prototype.showDialog = function () {
        this.display = true;
    };
    RepurposedForm.prototype.keypressed = function (key) {
        console.log('Key pressed: ' + key);
        this.quantity = key;
    };
    RepurposedForm = __decorate([
        core_1.Component({
            selector: 'repurposed-form',
            templateUrl: './app/modules/tracker/repurposed-form/repurposed-form.html',
            directives: [primeng_1.InputText, primeng_1.Button, primeng_1.SelectButton, primeng_1.Dialog],
            styleUrls: ['./app/assets/css/styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RepurposedForm);
    return RepurposedForm;
}());
exports.RepurposedForm = RepurposedForm;
//# sourceMappingURL=repurposed-form.js.map