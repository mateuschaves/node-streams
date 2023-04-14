import { Request, Response } from "express";
import TaskService from "./task.service";

class TaskController {
    private taskService: TaskService

    constructor(_taskService: TaskService) {
        this.taskService = _taskService
    }

    async createTask(request: Request, response: Response) {
        const { title, description } = request.body

        const task = {
            title,
            description
        }

        const createdTask = this.taskService.createTask(task)

        return response.status(201).json(createdTask)
    }

    async listTasks(request: Request, response: Response) {
        const { description, title } = request.query

        const tasks = this.taskService.listTasks(description as string, title as string)

        return response.status(200).json(tasks)
    }
}

export default TaskController