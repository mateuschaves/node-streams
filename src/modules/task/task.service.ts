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

    listTasks(): Task[] {
        return this.taskRepository.tasks
    }
}

export default TaskService