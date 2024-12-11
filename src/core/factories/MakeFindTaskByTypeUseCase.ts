import { SQLiteTaskRepository } from "../repositories/databases/SQLiteTaskRepository";
import { FindTasksByType } from "../usecases/FindTasksByType";

export abstract class MakeFindTaskByTypeUseCase {
  public static make() {
    const repository = new SQLiteTaskRepository();
    const useCase = new FindTasksByType(repository);

    return useCase;
  }
}
