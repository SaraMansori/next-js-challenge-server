import { model, Schema } from 'mongoose';
import { IUserDocument, IUserModel } from '../interfaces/models.interface';
import bcrypt from 'bcrypt';
import { encryptPassword } from '../utils/index';

const userSchema = new Schema<IUserDocument, IUserModel>(
	{
		username: { type: String },
		password: { type: String, required: true, select: false },
		favorites: {
			restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }]
		}
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

userSchema.pre('save', async function (next: any) {
	//TODO: Handle the next of this response
	try {
		this.password = encryptPassword(this.password);
		next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.validatePassword = function (password: string) {
	return bcrypt.compareSync(password, this.password);
};

const UserModel = model('User', userSchema);
UserModel.syncIndexes();
export default UserModel;