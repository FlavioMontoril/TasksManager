import { SQLiteTaskRepository } from "../repositories/databases/SQLiteTaskRepository";
import { DeleteTask } from "../usecases/DeleteTask";

export abstract class MakeDeleteTaskUseCase {
    public static make() {
        const repository = new SQLiteTaskRepository
        const useCase = new DeleteTask(repository);

        return useCase;
    }
}