import { Router } from 'express';
const router = Router();

import * as restaurantController from '../controllers/restaurant.controller';

router.post('/', restaurantController.CreateRestaurant);
router.get('/', restaurantController.GetRestaurants);
router.get('/:id', restaurantController.GetRestaurant);
router.put('/:id', restaurantController.UpdateRestaurant);
router.delete('/:id', restaurantController.DeleteRestaurant);

module.exports = router;
