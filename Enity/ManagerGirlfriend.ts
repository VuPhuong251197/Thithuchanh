import {Girlfriend} from "./Girlfriend";

export class ManagerGirlfriend {
    listGirlfriend :Girlfriend [] = []
    add (list: Girlfriend) {
        this.listGirlfriend.push(list)
    }
    searchNameGirlfriend (nameGirlFriend :string) {
        this.listGirlfriend.map(item => {
            if (item.nameGirlFriend === nameGirlFriend) {
                console.table(item)
            }
        })
    }
    editNameGirlfriend (nameGirlFriend: string,newGirl: Girlfriend) {
        for (let i = 0; i < this.listGirlfriend.length; i++) {
            if (this.listGirlfriend[i].nameGirlFriend === nameGirlFriend) {
                this.listGirlfriend[i] = newGirl
            }
        }
    }
    show () {
        console.table(this.listGirlfriend)
    }
}