import Task from "./task.entity";
import TaskRepository from "./task.repository";

class TaskService {
    private taskRepository: TaskRepository
    constructor(
        _taskRepository: TaskRepository
    ) {
        this.taskRepository = _taskRepository
    }

    createTask(task: Task): Task {
       return this.taskRepository.createTask(task)
    }

    listTasks(description?: string, title?: string): Task[] {
        return this.taskRepository. listTasks(description, title)
    }
}

export default TaskService