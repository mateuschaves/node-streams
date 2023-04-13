import Task from './task.entity'

class TaskRepository {
    tasks: Task[] = [] // This is the database

    createTask(task: Task): Task {
        task.id = this.tasks.length + 1
        task.created_at = new Date()

        this.tasks.push(task)
        return task
    }
}

export default TaskRepository