import { Response, RequestHandler } from 'express';
import UserModel from '../models/user.model';
import { JWTVerify } from '../services/jwt.service';
import { ITokenInfoReq } from '../middlewares';

//TODO: Handle Errors
export const GetProfile = (req: ITokenInfoReq, res: Response) => {

  try {
    const user = JWTVerify(req.token as string);

    if (user) {
      UserModel
        .findById(user.sub)
        .populate({
          path: 'favorites',
          populate: 'restaurants'
        })
        .then(user => res.json(user))
        .catch(err => console.error(err))
    } else {
      throw new Error('User not found');
    }

  } catch (err) {
    console.error(err);
  }

};

export const GetFavoriteRestaurants = (req: ITokenInfoReq, res: Response) => {
  try {

    const user = JWTVerify(req.token as string);

    if (user) {
      UserModel
        .findById(user.sub)
        .then(favRestaurants => {
          res.json(favRestaurants);
        })
        .catch(err => console.error(err))
    } else {
      throw new Error('User not found');
    }

  } catch (err) {
    console.error(err);
  }
};

export const UpdateFavoriteRestaurants = (req: ITokenInfoReq, res: Response) => {
  try {

    const user = JWTVerify(req.token as string);
    const { restaurantId, type } = req.body;

    //TODO: Add validation that checks if the restaurant is already in the list
    if (user && type === 'add') {
      UserModel
        .findByIdAndUpdate(user.sub,
          { $push: { 'favorites.restaurants': restaurantId } },
          { new: true })
        .then((response) => {
          res.json(response);
        })
        .catch(err => console.error(err))
    } else if (user && type === 'remove') {
      UserModel
        .findByIdAndUpdate(user.sub,
          { $pull: { 'favorites.restaurants': restaurantId } },
          { new: true })
        .then((response) => {
          res.json(response);
        })
        .catch(err => console.error(err))
    } else {
      throw new Error('User not found');
    }
  } catch (err) {
    console.error(err);
  }
};