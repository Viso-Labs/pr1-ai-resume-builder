// import DateExtension from '@joi/date';
// import * as JoiImport from 'joi';
// const Joi = JoiImport.;
const Joi = require('joi').extend(require('@joi/date'));

const login_validation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"]}}).required()
        .messages({
            "string.empty": "Field should not be empty!",
            "string.required": "Field is required!",
            "string.email": "Enter a valid email address!"
        }),
        password: password_joi_object(),
    })
    return schema.validate(data, { abortEarly: false });
}

const emailVerify = (data) => {
    const schema = Joi.object({
        email: Joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"]}}).required()
        .messages({
            "string.empty": "Field should not be empty!",
            "string.required": "Field is required!",
            "string.email": "Enter a valid email address!"
        }),
    })
    return schema.validate(data, { abortEarly: false });
}

const reset_password_validation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"]}}).required()
        .messages({
            "string.empty": "Field should not be empty!",
            "string.required": "Field is required!",
            "string.email": "Enter a valid email address!"
        }),
        password: password_joi_object(),
    })
    return schema.validate(data, { abortEarly: false });
}

const register_validation = (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required()
            .messages({
                "string.empty": "Field should not be empty!",
                "string.required": "Field is required!",
            }),
        email: Joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"]}}).required()
            .messages({
                "string.empty": "Field should not be empty!",
                "string.required": "Field is required!",
                "string.email": "Enter a valid email address!"
            }),
        password: password_joi_object(),
    })
    return schema.validate(data, { abortEarly: false });
}

const password_joi_object = () => {
    return Joi.string()
        .required()
        .min(5)
        .max(25)
        .custom(custom_password)
        .messages({
            "string.empty": "Field should not be empty!",
            "string.required": "Field is required!",
            "string.min": `Field should have at least {#limit} characters!`,
            "string.max": `Field should have at most {#limit} characters!`,
        });
}

const custom_password = (value, helper) => {
    if (value.search(/[a-zA-Z]/) < 0) {
        return helper.message("Password must contain at least one letter")
    }else if (value.search(/[0-9]/i) < 0) {
        return helper.message("Password must contain at least one number")
    }else {
        return true
    }
}


module.exports = {
    register_validation,
    login_validation,
    reset_password_validation,
    emailVerify
}