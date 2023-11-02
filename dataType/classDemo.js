var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class demo
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName ".concat(this.userName, ", age ").concat(this.age));
    };
    return User;
}());
// crating a new object
var user1 = new User("Nurullah", 21);
// user1.display();
// console.log(user1);
var user2 = new User("Bhuiyan", 35);
// user2.display();
// console.log(user2);
// inheritance demo
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, id) {
        var _this = _super.call(this, userName, age) || this;
        _this.id = id;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age:").concat(this.age, ", id: ").concat(this.id));
    };
    return Student;
}(User));
var student1 = new Student("Fahad", 14, 1012303);
student1.display();
