import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {CommonService} from '../common.service';

@Component({
    selector: 'app-work-process',
    templateUrl: './work-process.component.html',
    styleUrls: ['./work-process.component.css']
})
export class WorkProcessComponent implements OnInit {
    PageTitle = 'Web Development Testing Company in India';
    SiteName;
    FooterText = 'Bitpulse Technologies is renowned as a top web development testing company in India' +
        ' for providing the best quality web solutions.';
    constructor(private _dataService: CommonService,
                private meta: Meta) {
        this._dataService.setTitle(this._dataService.siteName + ' | ' + this.PageTitle);
        this._dataService.createLinkForCanonicalURL();
        this.SiteName = this._dataService.siteName;
        this.meta.addTags([
            {
                name: 'description',
                content: 'Looking for best Web Development and Testing Company? Call : +91-7838-926571.' +
                ' BITPULSE TECHNOLOGIES is renowned for providing the best web solution.'
            },
            {
                name: 'author',
                content: 'BITPULSE TECHNOLOGIES Private limited | bitpulsetechnologies.com | +91-7838-926571'
            },
            {
                name: 'keywords', content: 'Web Development Testing Company in India, ' +
            ' Android app Development in Kanpur, Hybrid App Development Company in India,' +
            ' Website Testing Company in India, App Testing Company in India, Bitpulse, Bitpulse Work Process'
            }
        ]);
    }

    ngOnInit() {
        this._dataService.loadScript('../../assets/js/kl-scripts.js');
        this._dataService.moveToDivByClass('agency');
    }
}
