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
var mock_menu_data_1 = require('./mock-menu-data');
var core_1 = require('@angular/core');
var MenuItemService = (function () {
    function MenuItemService() {
    }
    MenuItemService.prototype.getMenuItems = function () {
        return Promise.resolve(mock_menu_data_1.MENU);
    };
    MenuItemService.prototype.getMenuItem = function (id) {
        return this.getMenuItems().then(function (menu) { return menu.filter(function (menuItem) { return menuItem.id === id; })[0]; });
    };
    MenuItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MenuItemService);
    return MenuItemService;
}());
exports.MenuItemService = MenuItemService;
//# sourceMappingURL=menuItem.service.js.map