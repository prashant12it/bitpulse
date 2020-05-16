import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonService} from '../common.service';
import {Meta} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';

declare let $: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  PageTitle = 'Mobile App Testing Company India';
  contactEmail;
  contactNumber1;
  contactNumber2;
  contactNumberFormated1;
  contactNumberFormated2;
  SiteName: '';
  errorMessageInstitute: '';
  captchaKey;
  showCaptcha = false;
  siteCaptcha = false;
  captchaErr = false;
  FooterText = 'Bitpulse Technologies is a well known testing company and it stands with the top rated' +
      ' mobile app testing companies in India.';
  @ViewChild('queryForm') queryForm: NgForm;
  constructor(private _dataService: CommonService,
              private meta: Meta) {
    this._dataService.setTitle(this._dataService.siteName + ' | ' + this.PageTitle);
    this._dataService.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: 'Call us +91-7838926571 to know more about our services, and upcoming products.' +
        ' BITPULSE TECHNOLOGIES is the best development testing company.'
      },
      {name: 'author', content: 'BITPULSE TECHNOLOGIES Private limited | bitpulsetechnologies.com | +91-7838-926571'},
      {
        name: 'keywords', content: 'Security Testing Company India, Web Development Testing Company in India,' +
      ' Mobile App Testing Company India, Website and App Development Company in Kanpur, Bitpulse Technologies'
      }
    ]);
    this.captchaKey = this._dataService.captchaKey;
    if ( this._dataService.envVal !== 'local') {
      this.showCaptcha = true;
    } else {
      this.siteCaptcha = true;
    }
  }

  ngOnInit() {
    this._dataService.loadScript('../../assets/js/kl-scripts.js');
    this.SiteName = this._dataService.siteName;
    this.contactEmail = this._dataService.contactEmail;
    this.contactNumber1 = this._dataService.contactNumber1;
    this.contactNumber2 = this._dataService.contactNumber2;
    this.contactNumberFormated1 = this._dataService.contactNumberFormated1;
    this.contactNumberFormated2 = this._dataService.contactNumberFormated2;
    this._dataService.moveToDivByClass('agency');
  }

  senQuery(ele: NgForm) {
    this.captchaErr = false;
    if (!this.showCaptcha || this.siteCaptcha) {
      const formData = new FormData();
      if (this.queryForm.valid) {
        formData.append('FirstName', this.queryForm.value.name.trim());
        formData.append('LastName', (this.queryForm.value.lastname ?
            this.queryForm.value.lastname.trim() :
            ''));
        formData.append('Email', (this.queryForm.value.email ?
            this.queryForm.value.email.trim() :
            ''));
        formData.append('Subject', this.queryForm.value.subject.trim());
        formData.append('Message', this.queryForm.value.message.trim());
        this._dataService.sendPostRequest('sendEmail', formData)
            .subscribe(data => {
              const thisvar = this;
              if (data.code === 200) {
                $('#successModal').modal('show');
              } else if (data.code === 400) {
                $.each(data.message, function (index, value) {
                  thisvar.errorMessageInstitute = value;
                });
                $('#errorModal').modal('show');
              } else {
                this.errorMessageInstitute = data.message;
                $('#errorModal').modal('show');
              }
            });
      } else {
        $('#errorModal').modal('show');
      }
    } else {
      this.captchaErr = true;
    }
  }
  resolved(captchaResponse: string) {
    if (captchaResponse) {
      this.siteCaptcha = true;
    }
  }
  refreshForm() {
    window.location.reload();
  }
}
