const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.APP_PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    await sequelize.sync({
      force: false,
    });

    console.log('Database synchronized successfully');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server: ', error);
  }
};

startServer();
