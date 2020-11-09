import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loader, Api } from '../../providers';

/**
 * Generated class for the CarddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carddetails',
  templateUrl: 'carddetails.html',
})
export class CarddetailsPage {

  isReadyToProceed: boolean;

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, public api: Api, public loading: Loader, public viewCtrl: ViewController) {
    this.form = formBuilder.group({
      cardNumber: ['', Validators.compose([Validators.required, Validators.minLength(16)])],
      cvv: ['', Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern('[0-9]{3}')])],
      cardPin: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern('[0-9]{4}')])],
      cardYear: ['', Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2), Validators.pattern('[0-9]{2}')])],
      cardMonth: ['', Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2), Validators.pattern('[0-9]{2}')])],
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {
    
  }

  doSubmit() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
