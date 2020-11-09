import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MoneyTransformPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'moneyTransform',
})
export class MoneyTransformPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    //return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
}
