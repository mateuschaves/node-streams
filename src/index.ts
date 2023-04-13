import { config } from 'dotenv'
config()

import server from './server'
import TaskRouter from './modules/task/task.router'
import TaskController from './modules/task/task.controller'
import TaskService from './modules/task/task.service'
import TaskRepository from './modules/task/task.repository'
import express from 'express'

const taskControllerWithDependencies = new TaskController(new TaskService(new TaskRepository()))

server.use(express.json())
server.use(new TaskRouter(taskControllerWithDependencies).getRouter())


server.listen(process.env.PORT, () => {
  console.log('Server is listening on port 3000')
})