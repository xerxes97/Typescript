import {Router} from 'express'
import { deleteUser, getUser, getUsers, postUser, putUser, validateUserName } from '../controllers/usuarios';

const router = Router();

router.get('/validate', validateUserName);
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);



export default router