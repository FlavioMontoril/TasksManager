import { SQLiteTaskRepository } from "../repositories/databases/SQLiteTaskRepository";
import { CreateTask } from "../usecases/CreateTask";

export abstract class MakeCreateTaskUseCase {
    public static make() {
        const repository = new SQLiteTaskRepository();
        const useCase = new CreateTask(repository);

        return useCase;
    }
}