import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

/**
    Created by Akobundu Michael (P7543)
 */
@Pipe({
  name: 'expirationTransform',
})
export class ExpirationTransformPipe implements PipeTransform {

  transform(value: string, ...args) {
    return moment(value.substring(0,8)).format('dddd, DD MMMM, YYYY');
  }
}
