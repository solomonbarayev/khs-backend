const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { errorHandler } = require('./middleware/errorHandler');
require('dotenv').config();

const userRoutes = require('./routes/userRoute');
const applicationRoutes = require('./routes/applicantRoute');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/authRoutes');
const { requestLogger, errorLogger } = require('./middleware/logger');

const app = express();

const { PORT, MONGO_URI } = process.env;

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/khs-db', () => {
  console.log('Connected to DB');
});

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//request logger
app.use(requestLogger);

//routes
app.use('/users', userRoutes);
app.use('/applications', applicationRoutes);
app.use('/contact', contactRoutes);

app.use('/auth', authRoutes);

//error logger
app.use(errorLogger);

//errorHandling
app.use(errors());
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`App listening on port ${3000}`);
});
