const User = require('../models/User');

const handleSuccess = (res, data, statusCode = 200) => res.status(statusCode).json(data);

const handleError = (res, err, statusCode = 500) => res.status(statusCode).json({ message: err.message });

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    handleSuccess(res, users);
  } catch (err) {
    handleError(res, err);
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    handleSuccess(res, user, 201);
  } catch (err) {
    handleError(res, err);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return handleError(res, new Error('User not found'), 404);
    handleSuccess(res, updatedUser);
  } catch (err) {
    handleError(res, err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return handleError(res, new Error('User not found'), 404);
    handleSuccess(res, { message: 'User deleted successfully' });
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
