import { Router } from 'express'

import TaskController from './task.controller'
import validateTask from './task.middleware'

class TaskRouter {
    private taskController: TaskController

    constructor(_taskController: TaskController) {
        this.taskController = _taskController

        this.taskController.createTask = this.taskController.createTask.bind(this.taskController)
        this.taskController.listTasks = this.taskController.listTasks.bind(this.taskController)
    }

    getRouter() {
        const router = Router()

        router
            .post('/tasks', validateTask, this.taskController.createTask)
            .get('/tasks', this.taskController.listTasks)

        return router
    }
}

export default TaskRouter