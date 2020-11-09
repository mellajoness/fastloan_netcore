import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loader, Api } from '../../providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the OpenaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-openaccount',
  templateUrl: 'openaccount.html',
})
export class OpenaccountPage {

  form: FormGroup;

  isReadyToProceed: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: Loader, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      bvn: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]{11}')])]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {
    
  }

  tiggerAccountOpening() {
    this.loading.show('Opening account...');
    setTimeout(() => {
      this.loading.hide();
      this.navCtrl.push('OpenaccountsuccessPage');
    }, 5000);
  }

}
