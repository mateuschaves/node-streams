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
}

export default TaskRepository