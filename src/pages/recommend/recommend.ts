import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Loader, Api, Session } from '../../providers';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
  Created by Akobundu Michael AKA Bundle
 */

@IonicPage()
@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html',
})
export class RecommendPage {

  isReadyToProceed: boolean;
  form: FormGroup;
  phoneNumber: string;
  sessionKey: string;
  recommendMsg: string = "Kindly go to https://play.google.com/store/apps/details?id=io.fidelity.flashlend and download FastLoan";

  constructor(public socialSharing: SocialSharing, public session: Session, public modalCtrl: ModalController, public toastCtrl: ToastController, public storage: Storage, formBuilder: FormBuilder, public api: Api, public loading: Loader, public navCtrl: NavController, public navParams: NavParams) {
    this.form = formBuilder.group({
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(13), Validators.minLength(13), Validators.pattern('[0-9]{13}')])]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {
    this.phoneNumber = this.session._getPhoneNumber();

    this.sessionKey = this.session._getSessionKey();
  }

  /*inviteFriend() {
      this.loading.show("Sending your invite...");
      var req = {
        productId: 230,
        referee: this.form.value.phoneNumber,
        referrer: this.phoneNumber
      };
      this.api.post('add-referral', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
        if(res) {
          this.loading.hide();
          let status = this.modalCtrl.create('ReferralstatusPage', {success : res.code == '00' ? true : false });
          status.onDidDismiss((_action) => {
            if(!_action) {
              this.form.value.phoneNumber = null;
              return;
            }
            this.navCtrl.setRoot('DashboardPage');
          })
          status.present();
        }

      }, (error) => {
        console.log("error", error);
      })
  }*/

  shareOnTwitter() {
    this.socialSharing.shareViaTwitter(this.recommendMsg).then(() => {
      console.log('Message shared on twitter');
    }).catch(() => {
      this.api.messageHandler('Could not share on twitter: an error occured, please try installing the Twitter App if it is not installed');
    })
  }

  shareOnFacebook() {
    this.socialSharing.shareViaFacebook(this.recommendMsg).then(() => {
      console.log('Message shared on Facebook');
    }).catch(() => {
      this.api.messageHandler('Could not share on Facebook: an error occured, please try installing the Facebook App if it is not installed');
    })
  }

  shareOnInstagram() {
    this.socialSharing.shareViaInstagram(this.recommendMsg, null).then(() => {
      console.log('Message shared on Instagram');
    }).catch(() => {
      this.api.messageHandler('Could not share on Instagram: an error occured, please try installing the Instagram App if it is not installed');
    })
  }

}
