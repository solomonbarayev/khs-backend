const Users = require('../models/users');
const { JWT_SECRET } = process.env;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = (req, res, next) => {
  const { email, password } = req.body;
  Users.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: '7d',
      });
      res.send({ token });
    })
    .catch(next);
};

const getUsers = (req, res, next) =>
  Users.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);

const getUser = (req, res, next) =>
  Users.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new Error('User not found');
      }
      return res.status(200).send(user);
    })
    .catch(next);

// only loggedin Admin can make another admin
const createAdminUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  // check if req.user._is belongs to admin
  Users.findById(req.user._id)
    .then((user) => {
      if (user.isAdmin) {
        bcrypt.hash(password, 10).then((hash) => {
          Users.create({
            firstName,
            lastName,
            email,
            password: hash,
            isAdmin: true,
          })
            .then((user) => res.status(201).send(user))
            .catch(next);
        });
      } else {
        res.status(401).send({ message: 'Unauthorized' });
      }
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({ firstName, lastName, email, password: hash })
      .then((user) => res.status(201).send(user))
      .catch(next);
  });
};

module.exports = {
  login,
  getUsers,
  getUser,
  createAdminUser,
  createUser,
};
