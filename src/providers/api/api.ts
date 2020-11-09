import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * Created by Akobundu Michael (P7543)
 */
@Injectable()
export class Api {
   //url: string = 'https://example.com/api/v1';
   //url: string = 'http://10.20.2.33:9009/api/v1';
  // url: string = 'http://196.13.161.88:6780/MinesMobile/api/v1';
  //  url: string = 'https://lending.fidelitybank.ng/api/v1' ;       live           
  //url: string = 'http://10.10.7.213:9009/api/v1';
  //url: string = 'https://jsonplaceholder.typicode.com/posts';


  //  url:string='https://dtptest.fidelitybank.ng/DigitalLoanCSharp/api/v1';
  //  url:string='http://80.248.12.41:9008/api/v1';
   loginurl:string= 'https://dtptest.fidelitybank.ng/MigoLoanService/api/v1'
   url:string= 'https://dtptest.fidelitybank.ng/MigoLoanService/api/v1'
  options : any;

  isString : boolean;

  private _connectionError: string = "Unable to connect to server, please check your internet connection";

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
  }

  _injectAuth(sessionKey: string) {
    const headers = new HttpHeaders().set("sessionId", sessionKey);
    return this.options = {
      headers: headers
    };
  }

  messageHandler(msg: any, duration ?: any, position ?: any) {
        var messageToDisplay;
        if (typeof msg === 'string' && (msg !== null || msg !== undefined) ) this.isString = true
        /*if(this.isString) {
          messageToDisplay = msg;
        }
        else {
          if(msg.error || msg.message) {
            if(msg.error) {
              messageToDisplay = msg.error.message;
            }
            if(msg.message) {
              messageToDisplay = msg.message;
            }
          }
          else {
             messageToDisplay = this._connectionError;
          }

        }*/
        setTimeout(()=>{
          let toast = this.toastCtrl.create({
            message: this.isString ? msg : msg.error ? msg.error.message || this._connectionError : msg.message,
            duration: duration || 3000,
            position: position || 'top'
          });
          toast.present();
        }, 1000);

  }


  // digitalLoangetNewUrl(serviceName: string): Observable<any>  {
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type','application/json');
  //   headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, XApiKey');
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   const options = { headers: headers};

  //   const url = "https://dtptest.fidelitybank.ng/MigoLoanService/api/v1/Loan/"+ serviceName;

  //   return this.http.get(url, {...options}).pipe(shareReplay(1));
  // }


  // newGetLoans(phoneNumber) {  
  //   return  this.digitalLoangetNewUrl(`get-loans?Phonenumber=${phoneNumber}`);
  //  }


  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  postLogin(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.loginurl + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
