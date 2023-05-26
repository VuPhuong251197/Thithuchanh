"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Girlfriend = void 0;
var Girlfriend = /** @class */ (function () {
    function Girlfriend(idGirlFriend, nameGirlFriend, zodiac, homeTown, yearOfBirth, interest) {
        this._idGirlFriend = idGirlFriend;
        this._nameGirlFriend = nameGirlFriend;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._interest = interest;
    }
    Object.defineProperty(Girlfriend.prototype, "idGirlFriend", {
        get: function () {
            return this._idGirlFriend;
        },
        set: function (value) {
            this._idGirlFriend = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Girlfriend.prototype, "nameGirlFriend", {
        get: function () {
            return this._nameGirlFriend;
        },
        set: function (value) {
            this._nameGirlFriend = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Girlfriend.prototype, "zodiac", {
        get: function () {
            return this._zodiac;
        },
        set: function (value) {
            this._zodiac = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Girlfriend.prototype, "homeTown", {
        get: function () {
            return this._homeTown;
        },
        set: function (value) {
            this._homeTown = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Girlfriend.prototype, "yearOfBirth", {
        get: function () {
            return this._yearOfBirth;
        },
        set: function (value) {
            this._yearOfBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Girlfriend.prototype, "interest", {
        get: function () {
            return this._interest;
        },
        set: function (value) {
            this._interest = value;
        },
        enumerable: false,
        configurable: true
    });
    return Girlfriend;
}());
exports.Girlfriend = Girlfriend;
