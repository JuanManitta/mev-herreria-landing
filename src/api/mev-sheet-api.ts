import Papa from 'papaparse';
import { Product } from '../interfaces/mev-sheet';



  export async function getData() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSRmbOSt1vDkrvj1_Cu9mw2mUGEkMiFx__KDqeFAN65UJQC6WnIpIjSwJIFgAcC0dYyg-4tBRA2QciU/pub?gid=0&single=true&output=csv');
    const data = await response.text();
    const parsedData = Papa.parse<Product>(data, { header: true });
  
    return parsedData;
  }
  