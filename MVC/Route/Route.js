import express from 'express'
import { getMenus, newMenus } from '../Controllers/MenusController.js';
const router=express.Router()

// menu
router.post('/menu/newMenu', newMenus);     // POST 
router.get('/menu/getMenu',getMenus);     // GET   

export default router