import express from 'express'
import { getMenus, newMenus } from '../Controllers/MenusController.js';
import { getUser, getUserByID, newUser} from '../Controllers/SignUpController.js'
const router=express.Router()

// menu
router.post('/menu/newMenu',newMenus);   // POST 
router.get('/menu/getMenu',getMenus);    // GET   

// sign-up
router.post('/user/newUser',newUser);    // POST
router.get('/user/getUser', getUser);    // GET
router.get('/user/login/:email', getUserByID);    // GET BY EMAIL
export default router