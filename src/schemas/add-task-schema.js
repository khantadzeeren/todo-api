import Joi from "joi";

const addTaskSchema = async (data) => {
  return Joi.object({
    item: Joi.string().required().messages({
      "string.base": "item should be a string",
      "any.required": "item is required",
    }),
    completed: Joi.string().required().messages({
      "string.base": "completed should be a string",
      "any.required": "completed is required",
    }),
    id: Joi.number().required().messages({
        "string.base": "id should be a number",
        "any.required": "id  is required",
      }),
  });
};

export default addTaskSchema;