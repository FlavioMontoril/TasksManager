import { Task } from "../../entities/Tasks";

export interface TaskRepository {

    findAll(): Promise<Task[]>
    findById(id: string): Promise<Task | null>
    findByType(type: string): Promise<Task[]>
    create(task: Task): Promise<void>
    update(task: Task): Promise<Task>
    delete(id: string): Promise<void>    
}