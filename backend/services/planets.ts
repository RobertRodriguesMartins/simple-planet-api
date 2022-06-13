import Planets from "../interfaces/planets";
import * as modelPlanets from "../models/planets";

async function listPlanets(): Promise<Planets[]> {
  const data: Planets[] = await modelPlanets.default();
  if(data.length < 1) throw new Error('algo errado');

  return data;
}

export default listPlanets;