import {format} from 'date-fns';

/*
 * 
 * str - date 
 * type - date template
 * 
 */

export function formatDate(str, type){
  const date = new Date(str);
  return format(date,type);
}