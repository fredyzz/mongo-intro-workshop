const mongoose = require("mongoose");
const { School, User } = require("./models/user");

const connect = () => {
  // Here we should specify the connection string whit this format:
  // protocoll://<dbuser>:<dbpassword>@ds123456.mlab.com:23456/dbname
  return mongoose.connect("mongodb://localhost:27017/testdb");
};

async function main() {
  try {
    // 1. Connect to the database
    const connection = await connect();
    // console.log(connection);
    console.log("Connected to the database");

    // 2. Create a new school in ddbb
    const school = await School.create({
      other: false,
      street: "Main Street",
      houseNumber: 123,
      zip: 12345,
      city: "Springfield",
      State: "IL",
    });

    // 3. Create a new user in ddbb
    const user = await User.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      betaUser: true,
      birthDate: new Date("1995-05-15"),
      pets: ["Dog", "Cat"],
      address: {
        other: false,
        street: "Elm Street",
        houseNumber: 456,
        zip: 67890,
        city: "Anytown",
        State: "CA",
      },
      school: school._id, // Reference to the school we just created
    });

    // 4.Get user with school data
    const userWithSchool = await User.findById(user._id)
      .populate("school")
      .exec();
    console.log(userWithSchool);
  } catch (e) {
    console.log(e);
  }
}

main();
