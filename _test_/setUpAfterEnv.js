require('dotenv').config();

const databaseHelper = require('../config/db');

beforeAll(() => {
  return databaseHelper.connectDB();
});

beforeEach(() => {
  return databaseHelper.truncate();
});

afterAll(() => {
  return databaseHelper.disconnect();
});