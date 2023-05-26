export class Girlfriend {
    private _idGirlFriend: string;
    private _nameGirlFriend: string;
    private _zodiac: string;
    private _homeTown: string;
    private _yearOfBirth: string;
    private _interest: string;

    constructor(idGirlFriend: string, nameGirlFriend: string, zodiac: string, homeTown: string, yearOfBirth: string, interest: string) {
        this._idGirlFriend = idGirlFriend;
        this._nameGirlFriend = nameGirlFriend;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._interest = interest;
    }

    get idGirlFriend(): string {
        return this._idGirlFriend;
    }

    set idGirlFriend(value: string) {
        this._idGirlFriend = value;
    }

    get nameGirlFriend(): string {
        return this._nameGirlFriend;
    }

    set nameGirlFriend(value: string) {
        this._nameGirlFriend = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    set homeTown(value: string) {
        this._homeTown = value;
    }

    get yearOfBirth(): string {
        return this._yearOfBirth;
    }

    set yearOfBirth(value: string) {
        this._yearOfBirth = value;
    }

    get interest(): string {
        return this._interest;
    }

    set interest(value: string) {
        this._interest = value;
    }
}