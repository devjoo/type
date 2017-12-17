var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
user.userName = '홍길동';
user.userAge = 12;
console.log(user.userName);
console.log(user.userAge);
var UserTest = /** @class */ (function () {
    function UserTest() {
        this.users = [];
    }
    UserTest.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserTest.prototype.printUsers = function () {
        console.log(JSON.stringify(this.users));
    };
    UserTest.prototype.getUser = function (idx) {
        return this.users[idx];
    };
    return UserTest;
}());
var ut = new UserTest();
ut.addUser(user);
user = new User();
user.userName = '소나';
user.userAge = 17;
ut.addUser(user);
ut.printUsers();
var user2 = ut.getUser(0);
console.log(user2);
//# sourceMappingURL=user.js.map