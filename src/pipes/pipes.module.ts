import { NgModule } from '@angular/core';
import { MoneyTransformPipe } from './money-transform/money-transform';
import { DateTransformPipe } from './date-transform/date-transform';
import { CurrencyTransformPipe } from './currency-transform/currency-transform';
import { ExpirationTransformPipe } from './expiration-transform/expiration-transform';
import { BankcodePipe } from './bankcode/bankcode';
@NgModule({
	declarations: [MoneyTransformPipe,
    DateTransformPipe,
    CurrencyTransformPipe,
    ExpirationTransformPipe,
    BankcodePipe],
	imports: [],
	exports: [MoneyTransformPipe,
    DateTransformPipe,
    CurrencyTransformPipe,
    ExpirationTransformPipe,
    BankcodePipe]
})
export class PipesModule {}
