const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router
  .get("/users", protect, getUsers)
  .post("/users", protect, createUser)
  .put("/users/:id", protect, updateUser)
  .delete("/users/:id", protect, deleteUser);

module.exports = router;
