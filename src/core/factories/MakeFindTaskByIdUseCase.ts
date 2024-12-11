import { SQLiteTaskRepository } from "../repositories/databases/SQLiteTaskRepository";
import { FindTaskById } from "../usecases/FindTaskById";

export abstract class MakeFindTaskByIdUseCase {
  public static make() {
    const repository = new SQLiteTaskRepository();
    const useCase = new FindTaskById(repository);

    return useCase;
  }
}
