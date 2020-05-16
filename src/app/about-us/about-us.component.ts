import {Component, OnInit} from '@angular/core';
import {CommonService} from '../common.service';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    PageTitle = 'Hybrid App Development Company in India';
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
            },
            {
                name: 'keywords', content: 'Web Designing and Development Company in Kanpur, ' +
            ' Hybrid App Development Company in India, Web Development in UP, Kanpur Website Development Company,' +
            ' About Bitpulse Technologies, BITPULSE'
            }
        ]);
    }


    ngOnInit() {
        this._dataService.loadScript('../../assets/js/plugins/raphael_diagram/raphael-min.js');
        this._dataService.loadScript('../../assets/js/plugins/raphael_diagram/init.js');
        this._dataService.loadScript('../../assets/js/kl-scripts.js');
        this._dataService.moveToDivByClass('agency');
    }
}
