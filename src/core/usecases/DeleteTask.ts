import { TaskStatus } from "../entities/TaskStatus";
import { InvalidPropertiesException } from "../exceptions/InvalidPropertiesException ";
import { ResourceNotFoundException } from "../exceptions/ResourceNotFoundException";
import { TaskRepository } from "../repositories/contracts/TaskRepository";

export class DeleteTask {
    constructor(private readonly repository: TaskRepository) {}

    public async execute(id: string){
            const task = await this.repository.findById(id);

            if(!task) {
                throw new ResourceNotFoundException();
            }
            if(task.getStatus() === TaskStatus.DONE){
                throw new InvalidPropertiesException()
            }

            await this.repository.delete(id);
    }
}