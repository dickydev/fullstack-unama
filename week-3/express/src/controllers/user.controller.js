const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      code: 200,
      message: 'Success get all users',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        code: 404,
        message: 'User not found',
      });
    }
    res.status(200).json({
      code: 200,
      message: 'Success get all users',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name) {
      return res.status(400).json({
        code: 400,
        message: 'Name wajib diisi',
      });
    }
    if (!email) {
      return res.status(400).json({
        code: 400,
        message: 'Email wajib diisi',
      });
    }
    const user = await User.create({
      name: name,
      email: email,
    });

    res.status(201).json({
      code: 201,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { name, email } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        code: 404,
        message: 'User not found',
      });
    }
    if (!name) {
      return res.status(400).json({
        code: 400,
        message: 'Name wajib diisi',
      });
    }
    if (!email) {
      return res.status(400).json({
        code: 400,
        message: 'Email wajib diisi',
      });
    }

    await user.update({
      name: name,
      email: email,
    });

    res.status(200).json({
      code: 200,
      message: 'User updated successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params.id;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        code: 404,
        message: 'User not found',
      });
    }

    await user.destroy();

    res.status(200).json({
      code: 200,
      message: 'User deleted successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
