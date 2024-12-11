// import { Task } from "../entities/Tasks";
import { TaskStatus } from "../entities/TaskStatus";
import { TaskType } from "../entities/TaskType";
import { InvalidPropertiesException } from "../exceptions/InvalidPropertiesException ";
import { ResourceNotFoundException } from "../exceptions/ResourceNotFoundException";
import { TaskRepository } from "../repositories/contracts/TaskRepository";

export interface UpdateTaskPayload {
    summary: string;
    description: string;
    type: TaskType;
    status: TaskStatus;
    assignee?: string;
    reporter: string;
}

export class UpdateTask {

    constructor(private readonly repository: TaskRepository) {}

    public async execute(id: string, payload: UpdateTaskPayload) {
        const task = await this.repository.findById(id);

        if(!task) {
            throw new ResourceNotFoundException();
        }
        if(task.getStatus() === TaskStatus.DONE) {
            throw new InvalidPropertiesException();
        }

        task
        .setSummary(payload.summary)
        .setDescription(payload.description)
        .setType(payload.type)
        .setStatus(payload.status)
        .setAssignee(payload.assignee ?? "")
        .setReporter(payload.reporter)
        .setUpdatedAt(new Date());

        const updateTask = await this.repository.update(task);
        return updateTask
    }
}