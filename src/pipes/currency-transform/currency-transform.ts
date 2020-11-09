import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
  Created by Akobundu Michael (P7543)
 */
@Pipe({
  name: 'currencyTransform',
})
export class CurrencyTransformPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, ...args) {
      var result;
      if (value == 'NGN')
        result = '&#8358;';

      return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
