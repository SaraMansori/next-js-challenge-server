import mongoose from 'mongoose';
import config from '../config';

(async () => {
	const mongoOptions = {};

	try {
		const db = await mongoose.connect(
			config.MONGO_DB,
			mongoOptions
		);
		console.log('Database is connected to: ', db.connection.name);
	} catch (error) {
		console.error(error);
	}
})();
