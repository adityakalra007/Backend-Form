const CustomError = require('../utils/customError');

exports.handleContactForm = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new CustomError('All fields are required', 400));
  }

  res.status(200).json({
    success: true,
    message: `Thanks ${name}, we received your message!`,
  });
};
