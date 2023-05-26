import {ManagerGirlfriend} from "../Enity/ManagerGirlfriend";
import {Girlfriend} from "../Enity/Girlfriend";

let input = require ('readline-sync');
let choice = -1
let manager  = new ManagerGirlfriend()
while (true) {
    console.log('Input Select:' +
                '\n 1.Show' +
                '\n 2,Add' +
                '\n 3 Search' +
                '\n 0.Exit')
    choice = input.question('Select:')
    if (choice == 1) {
        manager.show()
    }
    if (choice == 2) {
        console.log('Input Info New List')
        let idGirlFriend = input.question('Input ID:')
        let nameGirlFriend = input.question('Input Name:')
        let zodiac = input.question('Input Zodiac:')
        let homeTown = input.question('Input Home Town:')
        let yearOfBirth = input.question('Input Year Of Birth:')
        let interest = input.question('Input Interest:')
        manager.add(new Girlfriend(idGirlFriend, nameGirlFriend, zodiac, homeTown, yearOfBirth, interest))
    }
    if (choice == 3) {
        let nameSearch = input.question('Search Name Girlfriend:')
        manager.searchNameGirlfriend(nameSearch)
    }
    if (choice == 4) {
        let nameEdit = input.question('Edit Girlfriend:')

    }
    if (choice == 0) {
        break;
    }
}
