import express from 'express'

import TaskRouter from './modules/task/task.router'
import TaskController from './modules/task/task.controller'
import TaskService from './modules/task/task.service'
import TaskRepository from './modules/task/task.repository'

const taskControllerWithDependencies = new TaskController(new TaskService(new TaskRepository()))

const app = express()

app.use(express.json())
app.use(new TaskRouter(taskControllerWithDependencies).getRouter())

export default app