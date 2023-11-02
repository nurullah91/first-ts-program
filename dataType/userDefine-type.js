// union type
var userId;
userId = 1234;
userId = "student-3";
// string array
var users;
users = [123, "md", "bhuiyan"];
// numeric enum
var requestType;
(function (requestType) {
    requestType[requestType["getData"] = 1] = "getData";
    requestType[requestType["readData"] = 3] = "readData";
    requestType[requestType["deleteData"] = 4] = "deleteData";
})(requestType || (requestType = {}));
// console.log(requestType);
// console.log(requestType.deleteData);
console.log(requestType["deleteData"]);
// string enum
var requestType2;
(function (requestType2) {
    requestType2["getData"] = "GET_DATA";
    requestType2["readData"] = "READ_DATA";
    requestType2["deleteData"] = "DELETE_DATA";
})(requestType2 || (requestType2 = {}));
// console.log(requestType);
// console.log(requestType.deleteData);
console.log(requestType["deleteData"]);
// heterogenous enum
var requestType3;
(function (requestType3) {
    requestType3["getData"] = "GET_DATA";
    requestType3[requestType3["readData"] = 3] = "readData";
    requestType3["deleteData"] = "DELETE_DATA";
})(requestType3 || (requestType3 = {}));
// console.log(requestType3);
// console.log(requestType3.deleteData);
console.log(requestType3["deleteData"]);
