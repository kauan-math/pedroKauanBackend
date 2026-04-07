import { Router, Request, Response } from "express";
import personagensController from "./controllers/personagens";

const routes = Router();

routes.get("/", (_request: Request, response: Response) =>
  response.status(200).json({ succes: true }),
);

routes.post("/personagens", personagensController.create);
routes.get("/personagens", personagensController.list);
routes.get("/personagens/:id", personagensController.getByid);
routes.put("/personagens/:id", personagensController.update);
routes.delete("/personagens/:id", personagensController.delete);

export default routes;