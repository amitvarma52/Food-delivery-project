import express from 'express'
import { getUser, newUser} from '../Controllers/SignUpController.js'
import { getMenus, newMenus } from '../Controllers/MenusController.js';
import {createLocation} from '../Controllers/LocalityController.js'
import { getLocations } from '../Controllers/LocalityController.js';
import {createCuisine,getCuisines} from '../Controllers/CuisinesController.js'
import {createCity,getCities} from "../Controllers/CityController.js"
import {createRestaurantType,getRestaurantTypes} from "../Controllers/RestaurantTypesController.js"
import {createRestaurantChain,getRestaurantChains} from "../Controllers/RestaurantChainController.js"
import { newCard,getCards } from '../Controllers/PlacesCollectionController.js';

const router=express.Router()

// menu
router.post('/menu/newMenu',newMenus);   // POST 
router.get('/menu/getMenu',getMenus);     // GET   

// sign-up
router.post('/user/newUser',newUser)     // POST
router.get('/user/getUser', getUser);    // GET   

//locations
router.post('/location/newlocation', createLocation);     // POST 
router.get('/location/list',getLocations);     // GET  


//cuisines
router.post('/cuisine/newCuisine', createCuisine);     // POST 
router.get('/cuisine/list',getCuisines);     // GET  


//cities
router.post('/cities/newCity', createCity);     // POST 
router.get('/cities/list',getCities);     // GET  


//restaurant types
router.post('/restaurant-types/restaurantType', createRestaurantType);     // POST 
router.get('/restaurant-types/list',getRestaurantTypes);     // GET  



//restaurant chains
router.post('/restaurant-chains/restaurantChain', createRestaurantChain);     // POST 
router.get('/restaurant-chains/list',getRestaurantChains);     // GET  


//collections
router.post('/collection/add', newCard);     // POST 
router.get('/collection/list',getCards);     // GET  





export default router