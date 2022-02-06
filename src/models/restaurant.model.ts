import { model, Schema } from 'mongoose';

const restaurantSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	neighborhood: {
		type: String,
		trim: true,
		default: 'Unknown'
	},
	photograph: {
		type: String,
		trim: true,
		default: 'https://estuario.org/wp-content/uploads/2019/09/image.png'
	},
	address: {
		type: String,
		trim: true,
		default: 'Unknown'
	},
	latlng: {
		lat: {
			type: Number,
		},
		lng: {
			type: Number,
		},
	},
	image: {
		type: String,
		default: 'https://estuario.org/wp-content/uploads/2019/09/image.png'
	},
	cuisine_type: {
		type: String,
		default: 'Unknown'
	},
	operating_hours: {
		Monday: {
			type: String,
		},
		Tuesday: {
			type: String,
		},
		Wednesday: {
			type: String,
		},
		Friday: {
			type: String,
		},
		Saturday: {
			type: String,
		},
		Sunday: {
			type: String,
		},
	},
	reviews: [
		{
			name: String,
			date: Date,
			rating: Number,
			comments: String,
		},
	],
});

const RestaurantModel = model('Restaurant', restaurantSchema);

export default RestaurantModel;
