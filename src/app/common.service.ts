import {Inject, Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';

declare let $: any;
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private _env = environment;
    siteName;
    siteURL;
    contactEmail;
    contactNumber1;
    contactNumber2;
    contactNumberFormated1;
    contactNumberFormated2;
    captchaKey;
    envVal;

    constructor(private titleService: Title, private _http: HttpClient, @Inject(DOCUMENT) private doc) {
        this.siteName = this._env.siteName;
        this.siteURL = this._env.siteURL;
        this.captchaKey = this._env.captchaKey;
        this.envVal = this._env.envVal;
        this.contactEmail = this._env.contactEmail;
        this.contactNumber1 = this._env.contactNumber1;
        this.contactNumber2 = this._env.contactNumber2;
        this.contactNumberFormated1 = this._env.contactNumberFormated1;
        this.contactNumberFormated2 = this._env.contactNumberFormated2;
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    createLinkForCanonicalURL() {
        const link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
        link.setAttribute('href', this.doc.URL);
    }
    loadScript(url: string) {
        const body = <HTMLDivElement> document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }

    moveToDivByClass(className) {
        $('html, body').animate({
            scrollTop: parseInt($('.' + className).offset().top) - (120)
        }, 1000);
    }

    sendMail(recordID, emailId, subject, body, fileUrl, fileName) {
        const formData = new FormData();
        formData.append('emailId', emailId);
        formData.append('subject', subject);
        formData.append('body', body);
        formData.append('fileUrl', fileUrl);
        formData.append('fileName', fileName);
        this.sendPostRequestOther('sendJsonEmail', formData)
            .subscribe(RES => {
                if (RES.code === 200) {
                    this.updateMailLog(recordID, '1');
                }
            });
    }

    updateMailLog(mailId, status) {
        const formData = new FormData();
        formData.append('mailId', mailId);
        formData.append('status', status);
        this.sendPostRequest('updateMailStatus', formData)
            .subscribe(RES => {
            });
    }

    getData(param) {
        return this._http.get<any>(this._env.dataUrl + param);
    }

    sendPostRequest(requestUrl: any, postData: any) {
        return this._http.post<any>(this._env.dataUrl + requestUrl, postData);
    }

    sendPostRequestOther(requestUrl: any, postData: any) {
        return this._http.post<any>(this._env.dataUrlOther + requestUrl, postData);
    }
}
