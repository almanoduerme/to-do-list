import { Request, Response } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../services/task.service";
import { handleErrorMessage } from "../utils";

const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    handleErrorMessage("fetching tasks", error as Error);
  }
};

const getTaskByIdController = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const getTask = await getTaskById(id)
    return res.status(200).json(getTask)
  } catch (error) {
    handleErrorMessage("fetching task by ID", error as Error);
  }
}

const createTaskController = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const newObject = { title, description, status };

  try {
    const tasks = await createTask(newObject);
    return res.status(200).json(tasks);
  } catch (error) {
    handleErrorMessage("creating task", error as Error);
  }
};

const updateTaskController = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const { id } = req.params

  try {    
    const updateTaskById = await updateTask(id, { title, description, status })
    return res.status(200).json(updateTaskById)
  } catch (error) {
    handleErrorMessage("updating task", error as Error);
  }
}

const deleteTaskController = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const deleteTaskById = await deleteTask(id)
    return res.status(200).json(deleteTaskById)
  } catch (error) {
    handleErrorMessage("deleting task", error as Error);
  }
}

export { createTaskController, deleteTaskController, getAllTasksController, getTaskByIdController, updateTaskController };
