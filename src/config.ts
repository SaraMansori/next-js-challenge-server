import dotenv from 'dotenv';
dotenv.config();

export default {
	MONGO_DB: process.env.MONGO_DB_REMOTE || 'mongodb://localhost/tailor-restaurants',
	PORT: process.env.PORT || '5005',
};
