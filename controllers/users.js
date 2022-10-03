import { response, request } from 'express';

export const usersGET = (req = request, res = response) => {
  const { q, name = 'No Name', apikey} = req.query;
  res.json({
    msg: 'get API - controller',
    q,
    name,
    apikey
  });
};

export const usersPOST = (req, res) => {
  const { name, age } = req.body;
  res.status(201).json({
    msg: 'post API - controller',
    name,
    age
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
