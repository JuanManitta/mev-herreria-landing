import Papa from 'papaparse';
import { Categories } from '../interfaces/mev-categories';



  export async function getGaleryImages() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSfPcsfeXRS9emwLm9uwKXoiBYRyMBYvoPagjLoCUe0jJJvd-oIKnRco5QThqPRR7c43Rezbt-bi2-v/pub?gid=0&single=true&output=csv');
    const data = await response.text();
    const parsedData = Papa.parse<Categories>(data, { header: true });
  
    return parsedData;
  }
  