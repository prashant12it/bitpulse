import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  PageTitle = 'Page Not Found';
  FooterText = 'Bitpulse Technologies is one of the best website and app development company' +
      ' offering a full range of services for almost any web-industry related entity.';
  constructor(private _dataService: CommonService,
              private meta: Meta) {
    this._dataService.setTitle(this.PageTitle + ' | ' + this._dataService.siteName);
    this.meta.addTags([
      {
        name: 'description',
        content: 'Bitpulse Tecnologies a web solutions provider company in India. Call +917838926571'
      },
      {name: 'author', content: 'Bitpulse Technologies Private limited | bitpulsetechnologies.com | +91-7838-926571'},
      {
        name: 'keywords', content: 'Page Not Found, Bitpulse Technologies'
      }
    ]); }

  ngOnInit() {
    this._dataService.loadScript('../../assets/js/kl-scripts.js');
    this._dataService.moveToDivByClass('agency');
  }
}
