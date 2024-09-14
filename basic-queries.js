const mongoose = require("mongoose");

const connect = () => mongoose.connect("mongodb://localhost:27017/testdb");

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    favBooks: [{ type: String }],
    info: {
      school: {
        type: String,
      },
      level: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);

async function main() {
  try {
    await connect();
    console.log("Connected to the database");

    const students = await Student.find({});
    console.log({ students });

    const studentById = await Student.findById("66e52e630a67d5c58eb1e684");
    console.log({ studentById });

    /*
     * The line { new: true } is an option passed to the
     * findByIdAndUpdate method in Mongoose. Here's what
     * it does:
     * By default, findByIdAndUpdate returns the document
     * as it was before the update was applied.
     * When you pass { new: true } as the third argument,
     * it tells Mongoose to return the modified document
     * rather than the original one.
     */

    const updatedStudent = await Student.findByIdAndUpdate(
      "66e52e630a67d5c58eb1e684",
      { firstName: "Updated Name" },
      { new: true }
    );
    console.log({ updatedStudent });
  } catch (e) {
    console.log(e);
  }
}

main();
