"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WelcomePerson = (person) => {
    console.log(`Hey ${person.firstName} ${person.lastName}`);
    return `Hey ${person.firstName} ${person.lastName}`;
};
const james = {
    firstName: "shemilore",
    lastName: "Silva",
};
WelcomePerson(james);
