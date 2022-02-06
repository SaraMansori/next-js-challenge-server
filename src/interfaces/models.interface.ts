import { Model } from 'mongoose';

export interface IUser {
	username: string;
	password: string;
	favorites: {
		restaurants: []
	}
};

export interface IUserDocument extends IUser, Document {
	validatePassword: (password: string) => boolean;
};

export type IUserModel = Model<IUserDocument>;
