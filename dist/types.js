"use strict";
const getLength = (obj) => {
    console.log(obj.length);
    return obj.length;
};
const stringArray = ["semilore", "hello", "world", "very"];
getLength("hello");
getLength(stringArray);
const wrapInArray = (obj) => {
    if (typeof obj === "string") {
        console.log([obj]);
    }
    else {
        console.log(obj);
    }
};
wrapInArray("hello");
wrapInArray(stringArray);
