import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  PageTitle = 'Best Web Development Company in Kanpur';
  SiteName;
  FooterText = 'Bitpulse Technologies is one of the best web development company' +
      ' known for providing all type of web related digital services.';
  constructor(private _dataService: CommonService,
              private meta: Meta) {
    this._dataService.setTitle(this._dataService.siteName + ' | ' + this.PageTitle);
    this._dataService.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: 'Looking for cheap and best web development company? Call +91-7838926571. ' +
        ' BITPULSE TECHNOLOGIES is offering a full range of digital services.'
      },
      {name: 'author', content: 'BITPULSE TECHNOLOGIES Private limited | bitpulsetechnologies.com | +91-7838-926571'},
      {
        name: 'keywords', content: 'Best Web Development Company in Kanpur, ' +
      'Best Web and App Development Company in Kanpur, Bitpulse Services, Best Testing Companies in India, Bitpulse'
      }
    ]); }

  ngOnInit() {
    this._dataService.loadScript('../../assets/js/kl-scripts.js');
    this._dataService.moveToDivByClass('agency');
  }
}
