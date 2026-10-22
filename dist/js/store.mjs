import {seedSuppliers} from './data.mjs';
const key='quotecraft-marketplace-v1';
export function fresh(){return {schema:1,suppliers:structuredClone(seedSuppliers),requests:[],offers:[]};}
export function load(){try{const d=JSON.parse(localStorage.getItem(key));if(d?.schema===1&&Array.isArray(d.suppliers)&&Array.isArray(d.requests)&&Array.isArray(d.offers))return d;}catch{}return fresh();}
export function persist(data){try{localStorage.setItem(key,JSON.stringify(data));return true;}catch{return false;}}
export function reset(){try{localStorage.removeItem(key);}catch{}return fresh();}
export function uid(){return globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2);}
