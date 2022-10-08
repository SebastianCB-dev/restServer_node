import { response, request } from 'express';
import bcryptjs from 'bcryptjs';

import User from '../models/user.js';
import { validationResult } from 'express-validator';

export const usersGET = (req = request, res = response) => {
  const { q, name = 'No Name', apikey} = req.query;
  res.json({
    msg: 'get API - controller',
    q,
    name,
    apikey
  });
};

export const usersPOST = async(req, res) => {

  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const {name, email, password, role} = req.body;
  const user = new User({name, email, password, role});
  // Verificar si el correo existe
  const existEmail = await User.findOne({email});
  if (existEmail) {
    return res.status(400).json({
      msg: 'Email Already Exist',
    });
  }
  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  // Guardar en base de datos
  await user.save();

  res.status(201).json({
    user
  });
  
}
export const usersDELETE = (req, res) => {
  res.json({
    msg: 'delete API - controller'
  });
};

export const usersPATCH = (req, res) => {
  res.json({
    msg: 'patch API - controller'
  });
}

export const usersPUT = (req, res) => {
  const { id } = req.params;
  res.status(400).json({
    msg: 'put API - controller',
    id
  });
}
