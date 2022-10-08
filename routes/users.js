import { Router } from 'express';
import { check } from 'express-validator';

import { usersDELETE, 
         usersGET, 
         usersPATCH, 
         usersPOST, 
         usersPUT } from '../controllers/users.js';

export const router = Router();

router.get('/', usersGET);

router.put('/:id', usersPUT);

router.post('/', [
  check('email', 'The email address of the user is not valid').isEmail()
], usersPOST);

router.delete('/', usersDELETE);

router.patch('/', usersPATCH);
