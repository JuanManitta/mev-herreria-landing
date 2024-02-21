import Papa from 'papaparse';
import { Categories } from '../interfaces/mev-categories';



  export async function getCategories() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNCG-hUKSvT2Or1MS_Mx1V_WOceTOqTrzs-_SI0MQF1m1vAz9zR3-g8h8NnWd0pYeDHWeqwtrMTRL/pub?gid=0&single=true&output=csv');
    const data = await response.text();
    const parsedData = Papa.parse<Categories>(data, { header: true });
  
    return parsedData;
  }
  