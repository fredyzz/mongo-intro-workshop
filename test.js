const mongoose = require("mongoose");

const connect = () => {
  // Here we should specify the connection string whit this format:
  // protocoll://<dbuser>:<dbpassword>@ds123456.mlab.com:23456/dbname
  return mongoose.connect("mongodb://localhost:27017/testdb");
};

// 1. Define the schema
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  favBooks: [{ type: string }],
  info: {
    school: {
      type: String,
    },
    level: {
      type: Number,
    },
  },
});

// 2. Define the model - with this model mongo will create a collection called "student"
const Student = mongoose.model("student", studentSchema);

async function main() {
  try {
    // 3. Connect to the database
    const connection = await connect();
    console.log("Connected to the database", { connection });

    // 4. Create a new student in ddbb
    const student = await Student.create({ firstName: "John" });
    console.log(student);
  } catch (e) {
    console.log(e);
  }
}

main();
