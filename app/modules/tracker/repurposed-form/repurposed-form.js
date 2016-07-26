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
var menuItem_service_1 = require('../menuItem.service');
var RepurposedForm = (function () {
    function RepurposedForm(menuItemService) {
        this.menuItemService = menuItemService;
        this.menu = [];
        this.tempQ = '';
        this.pageone = true;
        this.pagetwo = false;
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
        if (key.toString().localeCompare("<") == 0) {
            this.tempQ = this.tempQ.slice(0, -1);
        }
        else if (key.toString().localeCompare(".") == 0) {
            if (this.tempQ.indexOf(".") == -1)
                this.tempQ += key;
        }
        else if (key == 0) {
            if (this.tempQ != '0')
                this.tempQ += key;
        }
        else {
            this.tempQ += key;
        }
        this.quantity = Number(this.tempQ);
        console.log(this.quantity);
        return false;
    };
    RepurposedForm.prototype.submitQuantity = function () {
        this.display = false;
        this.quantity = Number(this.tempQ);
        console.log(this.quantity);
    };
    RepurposedForm.prototype.itemButtonClick = function (name) {
        console.log(name);
        this.itemName = name;
    };
    RepurposedForm.prototype.nextPage = function () {
        this.pageone = false;
        this.pagetwo = true;
    };
    RepurposedForm.prototype.prevPage = function () {
        this.pageone = true;
        this.pagetwo = false;
    };
    RepurposedForm = __decorate([
        core_1.Component({
            selector: 'repurposed-form',
            templateUrl: './app/modules/tracker/repurposed-form/repurposed-form.html',
            directives: [primeng_1.InputText, primeng_1.Button, primeng_1.SelectButton, primeng_1.Dialog],
            styleUrls: ['./app/assets/css/styles.css']
        }), 
        __metadata('design:paramtypes', [menuItem_service_1.MenuItemService])
    ], RepurposedForm);
    return RepurposedForm;
}());
exports.RepurposedForm = RepurposedForm;
//# sourceMappingURL=repurposed-form.js.map