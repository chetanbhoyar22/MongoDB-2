const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://localhost:27017/spider";
MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    console.error("Error connecting to database: ", err);
    return;
  }
  const database = db.db("spider");

  // console.log("Connected to database");
  // database.createCollection('emp',(err,success)=>{
  // if(err){
  //     console.error("error while creating collection", err)
  //     return;
  // }
  // console.log("collection created")
  //    })

  const employeeData = [
    {
      firstName: "John",
      lastName: "Doe",
      salary: "25000",
      department: "HR",
      lastCompany: "X",
      lastSalary: "10000",
      overallExp: "2",
      contactInfo: "1234567890",
      yearGrad: "2016",
      gradStream: "CSE",
    },
    {
      firstName: "Rohan",
      lastName: "Jame",
      salary: "30000",
      department: "Technical",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "1",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "roh",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      firstName: "Rohan",
      lastName: "Jame",
      salary: "30000",
      department: "Technical",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "1",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      firstName: "Rohan",
      lastName: "Jame",
      salary: "30000",
      department: "Technical",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "1",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
  ];

    database.collection("emp").insertMany(employeeData, (err,success)=>{
        if(err){
            console.error("error while inserting data", err)
            return;
        }
        console.log("data inserted", success)
    })

  // database.collection("emp").findOne({firstName:'Jame'},(err,success)=>{
  // if(err){
  //     console.error("error while finding", err)
  //     return;
  // }
  // console.log(success)
  // })

  // database.collection("emp").find({firstName:'Jame'}).toArray((err,res)=>{
  //     if(err){
  //         console.error("error while fetching", err)
  //         return;
  //     }
  //     console.log(res)
  // })

  // database.collection("emp").findOne({salary:{$gt:"30000"}},(err,res)=>{
  //     if(err){
  //         console.error("error while fetching", err)
  //         return;
  //     }
  //     console.log(res)
  // })

  // database.collection("emp").findOne({yearGrad:{$gt:"2016"},overallExp:{$lt:"2"}},(err,res)=>{
  //     if(err){
  //         console.error("error while fetching", err)
  //         return;
  //     }
  //     console.log(res)
  // })

  // database.collection("emp").deleteMany({lastCompany:"Y"},(err,res)=>{
  //     if(err){
  //         console.error("error while fetching", err)
  //         return;
  //     }
  //     console.log(res)
  // })

  // database
  //   .collection("emp")
  //   .updateMany(
  //     { salary: { $gt: "70000" } },
  //     { $set: { salary: "65000" } },
  //     (err, res) => {
  //       if (err) {
  //         console.log("error while fetching", err);
  //         return;
  //       }
  //       console.log(res);
  //     }
  //   );

  // database.collection("emp").deleteMany({},(err,res)=>{
  //     if(err){
  //         console.log("error while fetching", err)
  //         return;
  //     }
  //     console.log("success",res)
  // })
});