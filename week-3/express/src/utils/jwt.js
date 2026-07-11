const jwt = require('jsonwebtoken');

const getJWTSecret = () => {
  const secret = process.env.JWT_SECRET || 'secretbebaskok';

  if (!screen) {
    throw new Error('JWT SECRET belum dikonfigurasi pada file .env');
  }

  return secret;
};

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    getJWTSecret(),
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, getJWTSecret());
};

module.exports = {
  getJWTSecret,
  generateToken,
  verifyToken,
};
