import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PageTitle = 'Hybrid App Development Company';
  FooterText = 'Bitpulse Technologies is one of the best hybrid app development and testing company' +
      ' offering a full range of services for almost any web-industry related entity.';
  constructor(private _dataService: CommonService,
              private meta: Meta) {
    this._dataService.setTitle(this._dataService.siteName + ' | ' + this.PageTitle);
    this._dataService.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: 'Looking for website and app development company in Kanpur? Call : +91-7838-926571.' +
        ' BITPULSE TECHNOLOGIES is the best suggestion for you.'
      },
      {name: 'author', content: 'BITPULSE TECHNOLOGIES Private limited | bitpulsetechnologies.com | +91-7838-926571'},
      {
        name: 'keywords', content: 'Website and App Development Company in Kanpur, Web Development Testing Company in India,' +
      ' Website Development Company in Kanpur, Android app Development in Kanpur,' +
      ' Best Mobile App Development Company in Kanpur, Best Web Development Company in Kanpur, Bitpulse Technologies, Bitpulse'
      }
    ]); }

  ngOnInit() {
    this._dataService.loadScript('../../assets/js/plugins/scrollme/jquery.scrollme.js');
    this._dataService.loadScript('../../assets/js/plugins/_sliders/ios/jquery.iosslider.min.js');
    this._dataService.loadScript('../../assets/js/trigger/slider/laptop-slider/kl-laptop-slider.js');
    this._dataService.loadScript('../../assets/js/plugins/_sliders/caroufredsel/jquery.carouFredSel-packed.js');
    this._dataService.loadScript('../../assets/js/trigger/kl-partners-carousel.js');
    this._dataService.loadScript('../../assets/js/kl-scripts.js');
    this._dataService.loadScript('../../assets/js/kl-custom.js');
    this._dataService.moveToDivByClass('agency');
  }
}
