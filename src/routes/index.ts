const router = require("express").Router()

const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');
const restaurantRouter = require('./restaurants.routes');

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/restaurants", restaurantRouter);

module.exports = router;
