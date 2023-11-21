const { getProfile } = require('../controller/getProfile.js');
const profileRouter = require('express').Router();
profileRouter.route('/').get(getProfile);
module.exports = profileRouter;
