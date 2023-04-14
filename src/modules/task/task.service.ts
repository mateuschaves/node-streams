import UpdateTaskDto from "./dto/update-task.dto";
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

    updateTask(id: number, task: UpdateTaskDto): Task {
        return this.taskRepository.updateTask(id, task)
    }

    deleteTask(id: number): void {
        return this.taskRepository.deleteTaskById(id)
    }

    completeTask(id: number): Task {
        return this.taskRepository.completeTaskById(id)
    }
}

export default TaskService