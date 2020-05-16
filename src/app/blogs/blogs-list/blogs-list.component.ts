import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  PageTitle = 'BITPULSE TECHNOLOGIES - Blogs';
  SiteName;
  FooterText = 'Bitpulse Technologies\' USP is lightweight development which provides best loading time' +
      ' to the webapp hence result in a good business growth to the clients.';
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
