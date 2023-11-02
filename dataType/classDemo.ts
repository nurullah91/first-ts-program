   
   
   // class demo
        class User {
            // class syntax: properties, methods, constructor
            userName: string;
            age: number;

            constructor(userName: string, age: number) {
                this.userName = userName;
                this.age = age;
            }


            display(): void {
                console.log(`userName ${this.userName}, age ${this.age}`);
            }
        }

        // crating a new object
        let user1 = new User("Nurullah", 21);
        // user1.display();
        // console.log(user1);


        let user2 = new User("Bhuiyan", 35);
        // user2.display();
        // console.log(user2);



    // inheritance demo
    class Student extends User {

        id: number;

        constructor(userName: string, age: number, id: number) {
            super(userName, age)
            this.id = id;
        }

        display(): void {
            console.log(`userName: ${this.userName}, age:${this.age}, id: ${this.id}`);
        }

    }

    let student1 = new Student("Fahad", 14, 1012303)
    student1.display();

    