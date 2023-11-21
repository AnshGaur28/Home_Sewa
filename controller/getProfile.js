const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const getProfile = async (req, res) => {
  // console.log(req.headers['auth-token']);
  try {
    const token = req.headers['auth-token'];
    if (!token) {
      return res.status(401).json({
        success: false,
        msg: 'UNAUTHORIZED',
      });
    } else {
      const verify = jwt.verify(token, process.env.SECREATE);
      // console.log(verify.id);
      const user = await mongoose.model('User').find({ _id: verify.id });
      // console.log(user);
      res.status(200).json({ message: 'User found', user });
    }
  } catch (error) {
    console.log(user);
    res.status(500).json({ message: 'Internal server Error' });
  }
};

module.exports = { getProfile };
