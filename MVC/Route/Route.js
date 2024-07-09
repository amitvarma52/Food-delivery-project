import express from 'express'
import { getMenus, newMenus } from '../Controllers/MenusController.js';
import { getUser, newUser} from '../Controllers/SignUpController.js'
import { createfooter, getfooter } from '../Controllers/FooterController.js';
const router=express.Router()

// menu
router.post('/menu/newMenu',newMenus);   // POST 
router.get('/menu/getMenu',getMenus);     // GET   

// sign-up
router.post('/user/newUser',newUser)     // POST
router.get('/user/getUser', getUser);   //GET

// Footer
router.post("/footer/createfooter", createfooter); //POST
router.get("/footer/getfooter", getfooter); //GET

export default router