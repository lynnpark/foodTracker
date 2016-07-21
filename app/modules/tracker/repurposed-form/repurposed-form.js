"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var primeng_1 = require('primeng/primeng');
var RepurposedForm = (function () {
    function RepurposedForm(menuItemService) {
        this.menuItemService = menuItemService;
        this.menu = [];
        this.display = false;
        this.units = [];
        this.units.push({ label: 'lbs', value: 'lbs' });
        this.units.push({ label: 'ozs', value: 'ozs' });
        this.units.push({ label: 'ea', value: 'ea' });
    }
    RepurposedForm.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItemService.getMenuItems()
            .then(function (menu) { return _this.menu = menu; });
    };
    RepurposedForm.prototype.submitLog = function () {
        console.log(this.itemName);
        console.log(this.quantity + " " + this.unit);
    };
    RepurposedForm.prototype.showDialog = function () {
        this.display = true;
    };
    RepurposedForm.prototype.keypressed = function (key) {
        console.log('Key pressed: ' + key);
        this.quantity = key;
    };
    RepurposedForm.prototype.itemButtonClick = function (name) {
        console.log(name);
        this.itemName = name;
    };
    RepurposedForm = __decorate([
        core_1.Component({
            selector: 'repurposed-form',
            templateUrl: './app/modules/tracker/repurposed-form/repurposed-form.html',
            directives: [primeng_1.InputText, primeng_1.Button, primeng_1.SelectButton, primeng_1.Dialog]
        })
    ], RepurposedForm);
    return RepurposedForm;
}());
exports.RepurposedForm = RepurposedForm;
//# sourceMappingURL=repurposed-form.js.map