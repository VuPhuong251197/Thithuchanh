"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerGirlfriend = void 0;
var ManagerGirlfriend = /** @class */ (function () {
    function ManagerGirlfriend() {
        this.listGirlfriend = [];
    }
    ManagerGirlfriend.prototype.add = function (list) {
        this.listGirlfriend.push(list);
    };
    ManagerGirlfriend.prototype.searchNameGirlfriend = function (nameGirlFriend) {
        this.listGirlfriend.map(function (item) {
            if (item.nameGirlFriend === nameGirlFriend) {
                console.table(item);
            }
        });
    };
    ManagerGirlfriend.prototype.show = function () {
        console.table(this.listGirlfriend);
    };
    return ManagerGirlfriend;
}());
exports.ManagerGirlfriend = ManagerGirlfriend;
