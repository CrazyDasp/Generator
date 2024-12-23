import { Character } from "./Character"


class Team { // eslint-disable-line no-unused-vars
    constructor() {
        this.members = []
    }

    add(character) {
        if (character instanceof Character) {
            this.members.push(character)
        } else {
            throw new Error("You can add object only type of Character")
        }
    }

    *[Symbol.iterator]() {
        for (const member of this.members) {
            yield member
        }
    }
}



