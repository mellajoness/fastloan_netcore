import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

/**
 
 */
@Pipe({
  name: 'dateTransform',
})
export class DateTransformPipe implements PipeTransform {
 
  transform(value: string, ...args) {
    return moment(value).format('MMM, DD YYYY');
  }
}
