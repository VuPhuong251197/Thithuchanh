"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ManagerGirlfriend_1 = require("../Enity/ManagerGirlfriend");
var Girlfriend_1 = require("../Enity/Girlfriend");
var input = require('readline-sync');
var choice = -1;
var manager = new ManagerGirlfriend_1.ManagerGirlfriend();
while (true) {
    console.log('Input Select:' +
        '\n 1.Show' +
        '\n 2,Add' +
        '\n 3 Search' +
        '\n 0.Exit');
    choice = input.question('Select:');
    if (choice == 1) {
        manager.show();
    }
    if (choice == 2) {
        console.log('Input Info New List');
        var idGirlFriend = input.question('Input ID:');
        var nameGirlFriend = input.question('Input Name:');
        var zodiac = input.question('Input Zodiac:');
        var homeTown = input.question('Input Home Town:');
        var yearOfBirth = input.question('Input Year Of Birth:');
        var interest = input.question('Input Interest:');
        manager.add(new Girlfriend_1.Girlfriend(idGirlFriend, nameGirlFriend, zodiac, homeTown, yearOfBirth, interest));
    }
    if (choice == 3) {
        var nameSearch = input.question('Search Name Girlfriend:');
        manager.searchNameGirlfriend(nameSearch);
    }
    if (choice == 0) {
        break;
    }
}
