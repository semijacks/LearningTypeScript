"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 10);
console.log(user);
