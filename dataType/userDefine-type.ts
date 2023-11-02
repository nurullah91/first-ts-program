     
     // union type
        let userId: number | string;
        userId = 1234;
        userId = "student-3"

        // string array
        let users: (number | string)[];
        users = [ 123, "md", "bhuiyan"]


      // numeric enum
      enum requestType {
         getData = 1,
         readData = 3,
         deleteData
      }

      // console.log(requestType);
      // console.log(requestType.deleteData);
      console.log(requestType["deleteData"]);


      

      // string enum
      enum requestType2 {
         getData = "GET_DATA",
         readData = "READ_DATA",
         deleteData = "DELETE_DATA"
      }

      // console.log(requestType);
      // console.log(requestType.deleteData);
      console.log(requestType["deleteData"]);



      // heterogenous enum
      enum requestType3 {
         getData = "GET_DATA",
         readData = 3,
         deleteData = "DELETE_DATA"
      }

      // console.log(requestType3);
      // console.log(requestType3.deleteData);
      console.log(requestType3["deleteData"]);


