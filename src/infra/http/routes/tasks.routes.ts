import { Router } from "express";
import * as CreateTask from "../../controllers/CreateTaskController";
import * as FindById from"../../controllers/FindByIdController";
import * as FindByType from "../../controllers/FindByTypeController";
import * as UpdateTask from "../../controllers/UpdateTaskController";
import * as DeleteTask from "../../controllers/DeleteTaskController";
import * as FindAll from "../../controllers/FindAllTasksController"





const router = Router();

    router
    .get('/', FindAll.default.handle)
    .get('/:id', FindById.default.handle)
    .get('/type/:type', FindByType.default.handle)
    .post('/', CreateTask.default.handle)
    .put('/:id', UpdateTask.default.handle)
    .delete('/:id', DeleteTask.default.handle)

    export {router};