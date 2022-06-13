import { NextFunction, Request, Response } from "express";
import Planets from "../interfaces/planets";
import * as servicesPlanets from "../services/planets";

async function listPlanets(_req: Request, res: Response, _next: NextFunction): Promise<Response<string>> {
  try {
    const data: Planets[] = await servicesPlanets.default();

    if(data.length < 1) throw new Error('algo errado');

    return res.status(200).json(data);
  } catch (e) {
    console.log(e)
    return res.status(500).end();
  }
}

export default listPlanets;