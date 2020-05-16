import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {
  PageTitle = 'How to identify best web development company?';
  SiteName;
  FooterText = 'Bitpulse Technologies is one of the best hybrid app development company,' +
      ' providing synced web app solutions for almost every platform.';
  constructor(private _dataService: CommonService,
              private meta: Meta) {
    this._dataService.setTitle(this.PageTitle);
    this._dataService.createLinkForCanonicalURL();
    this.SiteName = this._dataService.siteName;
    this.meta.addTags([
      {
        name: 'description',
        content: 'Want to take your business online? Call : +91-7838-926571. ' +
        'BITPULSE TECHNOLOGIES is your professional source for online innovations.'
      },
      {
        name: 'author',
        content: 'BITPULSE TECHNOLOGIES Private limited | bitpulsetechnologies.com | +91-7838-926571'
      }
    ]);
  }


  ngOnInit() {
    this._dataService.loadScript('../../../assets/js/kl-scripts.js');
    this._dataService.moveToDivByClass('agency');
  }
}
