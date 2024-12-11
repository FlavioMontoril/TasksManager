import { SQLiteTaskRepository } from "../repositories/databases/SQLiteTaskRepository";
import { findAllTasks } from "../usecases/FindAllTasks";

export abstract class MakeFindAllTasksUseCase {
    public static make() {
      const repository = new SQLiteTaskRepository();
      const useCase = new findAllTasks(repository);
  
      return useCase;
    }
  }
  