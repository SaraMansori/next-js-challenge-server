import { RequestHandler } from 'express';
import RestaurantModel from '../models/restaurant.model';

export const GetRestaurants: RequestHandler = (req, res) => {
	RestaurantModel
		.find()
		.then(restaurants => res.status(200).json(restaurants))
		.catch(err => console.error(err));
};

export const GetRestaurant: RequestHandler = (req, res) => {
	const { id } = req.params;
	RestaurantModel
		.findById(id)
		.then(restaurant => res.status(200).json(restaurant))
		.catch(err => console.error(err));
};

export const CreateRestaurant: RequestHandler = (req, res) => {
	const restaurant = req.body;

	RestaurantModel
		.create(restaurant)
		.then((restaurant) =>
			res.status(200).json(restaurant)
		)
		.catch(err => console.error(err));
};

export const UpdateRestaurant: RequestHandler = (req, res) => {

	const { id } = req.params;
	const { name, neighborhood } = req.body;

	RestaurantModel
		.findByIdAndUpdate({ _id: id }, { name: name, neighborhood: neighborhood }, { new: true })
		.then((restaurant) => {
			if (!restaurant) {
				res.status(204).json('Restaurant doesn\'t exist');
			} else {
				res.status(200).json(restaurant);
			}
		})
		.catch(err => console.error(err));
};

export const DeleteRestaurant: RequestHandler = (req, res) => {

	const { id } = req.params;

	RestaurantModel
		.findByIdAndDelete(id)
		.then(() => res.status(200).json('Restaurant deleted succesfully'))
		.catch(err => console.error(err));
};
