"use strict";
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.city = "Cooch Behar";
        this._courceCound = 1;
    }
    deleteToken() {
        console.log("Delete Token");
    }
    get appleId() {
        return `Email: ${this.email}`;
    }
    get courseCount() {
        return this._courceCound;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courceCound = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courceCound = 4;
    }
}
const user = new User("deepak@gmail.com", "3423");
