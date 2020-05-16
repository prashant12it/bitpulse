import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-foot-text',
  templateUrl: './foot-text.component.html',
  styleUrls: ['./foot-text.component.css']
})
export class FootTextComponent implements OnInit {
  contactEmail;
  contactNumber1;
  contactNumber2;
  contactNumberFormated1;
  contactNumberFormated2;
  SiteName: '';
  year = new Date().getFullYear();
  @Input() public FootText: string;
  constructor(private _dataService: CommonService) {
    this.SiteName = this._dataService.siteName;
    this.contactEmail = this._dataService.contactEmail;
    this.contactNumber1 = this._dataService.contactNumber1;
    this.contactNumber2 = this._dataService.contactNumber2;
    this.contactNumberFormated1 = this._dataService.contactNumberFormated1;
    this.contactNumberFormated2 = this._dataService.contactNumberFormated2;
  }

  ngOnInit() {
  }

}
