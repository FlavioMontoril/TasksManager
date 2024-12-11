import { SQLiteTaskRepository } from "../repositories/databases/SQLiteTaskRepository";
import { UpdateTask } from "../usecases/UpdateTask";

export abstract class MakeUpdateTaskUseCase {
    public static make() {
      const repository = new SQLiteTaskRepository();
      const useCase = new UpdateTask(repository);
  
      return useCase;
    }
  }