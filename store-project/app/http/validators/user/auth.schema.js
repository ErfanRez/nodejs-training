const Joi = require("@hapi/joi");

const getOtpSchema = Joi.object({
  mobile: Joi.string()
    .length(11)
    .pattern(/^09[0-9]{9}$/)
    .error(new Error("Phone number is not valid!")),
});

const checkOtpSchema = Joi.object({
  mobile: Joi.string()
    .length(11)
    .pattern(/^09[0-9]{9}$/)
    .error(new Error("Phone number is not valid!")),
  code: Joi.string().min(4).max(6).error(new Error("Invalid OTP code!")),
});

module.exports = {
  getOtpSchema,
  checkOtpSchema,
};
