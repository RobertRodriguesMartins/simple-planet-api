import { config } from 'dotenv';

config();

export default {
  method: 'GET',
  url: process.env.API_URL!,
  headers: {
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.API_KEY!
  }
};