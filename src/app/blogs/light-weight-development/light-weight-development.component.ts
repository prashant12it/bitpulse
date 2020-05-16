import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-light-weight-development',
  templateUrl: './light-weight-development.component.html',
  styleUrls: ['./light-weight-development.component.css']
})
export class LightWeightDevelopmentComponent implements OnInit {
  PageTitle = 'Importance of Lightweight Web Development';
  SiteName;
  FooterText = 'Bitpulse Technologies\' USP is light weight development which provides best loading time' +
      ' to the webapp hence result in a good business growth to the clients.';
  constructor(private _dataService: CommonService,
              private meta: Meta) {
    this._dataService.setTitle(this.PageTitle);
    this._dataService.createLinkForCanonicalURL();
    this.SiteName = this._dataService.siteName;
    this.meta.addTags([
      {
        name: 'description',
        content: 'Looking for website and app development company in Kanpur? Call : +91-7838-926571.' +
        ' BITPULSE TECHNOLOGIES is expert in light-weight web and app development.'
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
