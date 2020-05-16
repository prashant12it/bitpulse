import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommonService} from '../common.service';
import {Meta} from '@angular/platform-browser';

declare let $: any;
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  PageTitle = 'Request A Quote';
  contactEmail;
  contactNumber1;
  contactNumber2;
  contactNumberFormated1;
  contactNumberFormated2;
  SiteName: '';
  CountryCode: '';
  errorMessageInstitute: '';
  FileNameArr = [];
  captchaKey;
  showCaptcha = false;
  siteCaptcha = false;
  captchaErr = false;
  FooterText = 'Bitpulse Technologies is a well known Web Development and Testing company which stands with the top rated' +
      ' web development companies in India.';
  @ViewChild('quoteForm') quoteForm: NgForm;
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
    this._dataService.loadScript('../../assets/js/intlTelInput.js');
    this.SiteName = this._dataService.siteName;
    this.contactEmail = this._dataService.contactEmail;
    this.contactNumber1 = this._dataService.contactNumber1;
    this.contactNumber2 = this._dataService.contactNumber2;
    this.contactNumberFormated1 = this._dataService.contactNumberFormated1;
    this.contactNumberFormated2 = this._dataService.contactNumberFormated2;
      if ($('#cf_phone').length) {
        const input = document.querySelector('#cf_phone');
        (<any>window).intlTelInput(input, {
          preferredCountries: ['in'],
          separateDialCode: true
        });
      }
    this._dataService.moveToDivByClass('agency');
  }

  getFileName(event) {
    this.FileNameArr = [];
    const fileNameArr = event.target.files;
    const arrCount = fileNameArr.length;
    for (let i = 0; i < arrCount; i++) {
      this.FileNameArr[i] = fileNameArr[i].name;
    }
  }
  senQuery(ele: NgForm) {
    this.captchaErr = false;
    if (!this.showCaptcha || this.siteCaptcha) {
      const datafile = document.getElementById('Attachmentfile') as HTMLInputElement;
      const formData = new FormData();
      if (this.quoteForm.valid) {
        formData.append('FirstName', this.quoteForm.value.name.trim());
        formData.append('LastName', (this.quoteForm.value.lastname ?
            this.quoteForm.value.lastname.trim() :
            ''));
        formData.append('Email', (this.quoteForm.value.email ?
            this.quoteForm.value.email.trim() :
            ''));
        formData.append('contactNo', (this.quoteForm.value.contactNo ?
            this.CountryCode + ' ' + this.quoteForm.value.contactNo.trim() :
            ''));
        formData.append('projectType', (this.quoteForm.value.projectType ?
            this.quoteForm.value.projectType.trim() :
            ''));
        formData.append('website', (this.quoteForm.value.website ?
            this.quoteForm.value.website.trim() :
            ''));
        formData.append('Subject', this.quoteForm.value.subject.trim());
        formData.append('Message', this.quoteForm.value.message.trim());
        formData.append('Budget', this.quoteForm.value.budget.trim());
        const totalFiles = this.FileNameArr.length;
        for (let i = 0; i < totalFiles; i++) {
          formData.append('datafile[]', datafile.files[i], this.FileNameArr[i]);
        }
        this._dataService.sendPostRequest('sendQuoteEmail', formData)
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
  getPhoneNo() {
    this.CountryCode = $('.iti__selected-dial-code').text();
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
