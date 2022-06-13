import Planets from "../interfaces/planets";
import { AxiosResponse } from 'axios';
import * as api from '../api/planetsApi';

async function listPlanets(): Promise<Planets[]> {
  const planets: AxiosResponse<Planets[]> = await api.default();

  if(planets.data.length < 1) throw new Error('algo errado');

  return planets.data;
}

export default listPlanets;