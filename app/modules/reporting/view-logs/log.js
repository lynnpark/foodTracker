"use strict";
var Log = (function () {
    function Log(id, dateTime, formType, itemName, itemType, quantity, unit, lossReason) {
        this.id = id;
        this.dateTime = dateTime;
        this.formType = formType;
        this.itemName = itemName;
        this.itemType = itemType;
        this.quantity = quantity;
        this.unit = unit;
        this.lossReason = lossReason;
    }
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=log.js.map