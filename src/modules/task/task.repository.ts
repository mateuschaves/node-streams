import UpdateTaskDto from './dto/update-task.dto'
import Task from './task.entity'

class TaskRepository {
    tasks: Task[] = [] // This is the database

    createTask(task: Task): Task {
        task.id = this.tasks.length + 1
        task.created_at = new Date()

        this.tasks.push(task)
        return task
    }

    listTasks(description?: string, title?: string): Task[] {
        let tasks = this.tasks

        if (description) {
            tasks = this.tasks.filter(task => String(task.description).toLowerCase().includes(String(description).toLowerCase()))
        }

        if (title) {
            tasks = this.tasks.filter(task => String(task.title).toLowerCase().includes(String(title).toLowerCase()))
        }

        return tasks
    }

    updateTask(id: number, task: UpdateTaskDto): Task {
        const taskIndex = this.tasks.findIndex(task => task.id === id)

        if (taskIndex === -1) {
            throw new Error('Tarefa não encontrada')
        }

        const updatedTask = {
            ...this.tasks[taskIndex],
            updated_at: new Date()
        }

        if (task.title) {
            updatedTask.title = task.title
        }

        if (task.description) {
            updatedTask.description = task.description
        }

        this.tasks[taskIndex] = updatedTask

        return updatedTask
    }

    getTaskById(id: number): Task {
        const task = this.tasks.find(task => task.id === id)

        if (!task) {
            throw new Error('Tarefa não encontrada')
        }

        return task
    }

    deleteTaskById(id: number): void {
        const taskIndex = this.tasks.findIndex(task => task.id === id)

        if (taskIndex === -1) {
            throw new Error('Tarefa não encontrada')
        }

        this.tasks.splice(taskIndex, 1)
    }

    completeTaskById(id: number): Task {
        const taskIndex = this.tasks.findIndex(task => task.id === id)

        if (taskIndex === -1) {
            throw new Error('Tarefa não encontrada')
        }

        const updatedTask = {
            ...this.tasks[taskIndex],
            completed_at: new Date()
        }

        this.tasks[taskIndex] = updatedTask

        return updatedTask
    }
}

export default TaskRepository