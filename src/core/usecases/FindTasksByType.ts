import { TaskType } from "../entities/TaskType";
import { ResourceNotFoundException } from "../exceptions/ResourceNotFoundException";
import { TaskRepository } from "../repositories/contracts/TaskRepository";

export class FindTasksByType {
    constructor(private readonly repository: TaskRepository) {}

        public async execute(type: TaskType) {
            const task = await this.repository.findByType(type);

            if(!task) {
                throw new ResourceNotFoundException();
            }

            return task;
        }
    
}