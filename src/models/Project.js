import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    item: {
        type: Schema.Types.String,
        required: true,
      },
      completed: {
        type: Schema.Types.Boolean,
        required: true,
      },
      id: {
        type: Schema.Types.Number,
        required: true,
      },
});
 

const Project = model("project", todoSchema);

export default Project;