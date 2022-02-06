import { Router } from 'express';
const router = Router();

import * as userController from '../controllers/user.controller';
import { tokenMiddleware } from '../middlewares';

router.get('/profile', tokenMiddleware, userController.GetProfile);
router.get('/favorites/restaurants', tokenMiddleware, userController.GetFavoriteRestaurants);
router.post('/add-favorite-restaurant', tokenMiddleware, userController.UpdateFavoriteRestaurants)

module.exports = router;
