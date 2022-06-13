import axios, { AxiosResponse } from 'axios';
import config from './config';

export default async function planetsApiFetch(endpoint?: string): Promise<AxiosResponse> {
  const conf = {...config};

  conf.url = endpoint? endpoint: config.url;

  const response = await axios.request(config);
  return response;
} 
