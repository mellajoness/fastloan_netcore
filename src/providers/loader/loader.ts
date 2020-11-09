import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

/**
 * Created by Akobundu Michael
 * Loader is a generic App busy handler.
 */
@Injectable()
export class Loader {
  content: string = 'Please wait';
  loading: any;

  constructor(public loadingCtrl: LoadingController, public ngProgress: NgProgress) {

  }

  create(message ? : string) {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: message || this.content
    });
  }

  show(message ? : string) {
    this.create(message);
    this.ngProgress.start();
    return this.loading.present();
  }

  hide() {
    this.ngProgress.done();
    return this.loading.dismiss();
  }
}