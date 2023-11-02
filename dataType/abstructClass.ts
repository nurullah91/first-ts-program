
// class demo
abstract class User {
    // class syntax: properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }


   abstract display(): void;
}



// inheritance demo
class Student extends User {

    id: number;

    constructor(userName: string, age: number, id: number) {
        super(userName, age)
        this.id = id;
    }

    // using abstract class display as wish
    display(): void {
        console.log(`userName: ${this.userName}, age:${this.age}, id: ${this.id}`);
    }

}

let student1 = new Student("Fahad", 14, 1012303)
student1.display();

