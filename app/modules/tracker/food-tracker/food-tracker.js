"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FoodTracker = (function () {
    function FoodTracker() {
    }
    FoodTracker = __decorate([
        core_1.Component({
            selector: 'food-tracker',
            templateUrl: './app/modules/tracker/food-tracker/food-tracker.html'
        })
    ], FoodTracker);
    return FoodTracker;
}());
exports.FoodTracker = FoodTracker;
//# sourceMappingURL=food-tracker.js.map