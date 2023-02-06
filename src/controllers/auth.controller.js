const express = require("express");

const  { UserProfileFollowingMapSchema, UserProfileSchema } = require("../models/user.model")

const jwt = require("jsonwebtoken");

const newToken = (UserProfile) =>{
    return jwt.sign({UserProfile}, "SALT")
}

const login = async (req, res) => {
  try {
    let user;

    user = await UserProfileSchema.findOne({ email: req.body.email }).lean().exec();

    if (!user) {
      return res.status(400).send({ message: "user not present" });
    }
    const token = newToken(user);

    res.status(200).send({ user, token });
  } catch (er) {
    res.status(500).send(er.message);
  }
};

const register = async (req, res) => {
  try {
    let user;

    user = await UserProfileSchema.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      return res.status(400).send({ message: "email already exist" });
    }
    user = await UserProfileSchema.create(req.body);

    const token = newToken(user);

    res.status(200).send({ user, token });
  } catch (er) {
    res.status(500).send(er.message);
  }
};





module.exports = { register, login };