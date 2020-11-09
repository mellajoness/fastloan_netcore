import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BankcodePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'bankcode',
})
export class BankcodePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if (value == '070') {
      return "Fidelity Bank";
    }
    if (value == '033') {
      return "UBA";
    }
    if (value == '050') {
      return "Eco Bank";
    }
    if (value == '044') {
      return "Access Bank";
    }
    if (value == '063') {
      return "Diamond Bank";
    }
    if (value == '014') {
      return "Mainstreet Bank";
    }
    if (value == '082') {
      return "Keystone Bank";
    }
    if (value == '084') {
      return "Enterprise Bank";
    }
    if (value == '011') {
      return "First Bank";
    }
    if (value == '214') {
      return "FCMB";
    }
    if (value == '032') {
      return "Union Bank";
    }
    if (value == '232') {
      return "Sterling Bank";
    }
    if (value == '076') {
      return "Polaris Bank";
    }
    if (value == '058') {
      return "GTB";
    }
    if (value == '215') {
      return "Unity Bank";
    }
    if (value == '057') {
      return "Zenith Bank";
    }
    if (value == '023') {
      return "Citi Bank";
    }
    if (value == '039') {
      return "Stanbic IBTC Bank";
    }
    if (value == '068') {
      return "Standard Chartered";
    }
    if (value == '035') {
      return "Wema Bank";
    }
    if (value == '301') {
      return "Jaiz Bank";
    }
    if (value == '030') {
      return "Heritage Bank";
    }
  }
}
