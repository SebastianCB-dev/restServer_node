import { Router } from 'express';
import { usersDELETE, 
         usersGET, 
         usersPATCH, 
         usersPOST, 
         usersPUT } from '../controllers/users.js';

export const router = Router();

router.get('/', usersGET);

router.put('/:id', usersPUT);

router.post('/', usersPOST);

router.delete('/', usersDELETE);

router.patch('/', usersPATCH);
