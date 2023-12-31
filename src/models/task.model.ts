import { model, Schema } from "mongoose";
import { TaskDTO } from "../dto/task.dto";
import { applyReusableSchemaMethods  } from "../utils/applyReusableSchemaMethods";

const TaskSchema = new Schema<TaskDTO>({
  uid: { type: String },
  title: { type: String, required: [true, "The title is required!"] },
  description: { type: String, required: [true, "The description is required!"] },
  status: { type: Boolean, default: false },
});

applyReusableSchemaMethods (TaskSchema); 

export default model<TaskDTO>('Task', TaskSchema)