import axios from 'axios';
import {BASE} from './config'

export const instance = axios.create({
    baseURL: BASE,
    timeout: 10000,
    headers: 
    {
    'AqarPress-UserSessionId' : '',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  });
 