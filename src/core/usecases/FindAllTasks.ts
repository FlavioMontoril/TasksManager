import { TaskRepository } from "../repositories/contracts/TaskRepository";

export class findAllTasks {
    constructor(private readonly repository: TaskRepository) {}

    public async execute(){
        const tasks = await this.repository.findAll();
console.log(tasks)
        return tasks;
    }
}