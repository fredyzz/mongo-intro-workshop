const User = require("./models/user");

/*
 * The .exec() method is used at the end of Mongoose queries to execute them.
 * While it's not always necessary (as Mongoose will execute the query implicitly
 * when you attach a callback or use await), using .exec() has some benefits:
 *
 * 1. It returns a true Promise, which can be more predictable than Mongoose's
 *    default thenable.
 * 2. It can provide better stack traces if an error occurs.
 * 3. It allows for more explicit control over when the query is executed.
 * 4. In some cases, it can offer slight performance improvements.
 *
 * Overall, using .exec() is considered a good practice for clarity and consistency.
 */

const getUserById = async (id) => User.findById(id).exec();

const getAllUsers = async () => User.find({}).exec();

const createUser = async (user) => User.create(user);

const removeUserById = async (id) => User.findByIdAndDelete(id).exec();

const updateUserById = async (id, updatedUser) =>
  User.findByIdAndUpdate(id, updatedUser, { new: true }).exec();

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById,
};
