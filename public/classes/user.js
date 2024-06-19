"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, lastname, gender, age) {
        this.gender = "Male";
        this.firstName = name;
        this.lastName = lastname;
        this.age = age;
        this.gender = gender;
    }
    getuser() {
    }
    setUser(name) {
        console.log(name);
    }
}
exports.User = User;
