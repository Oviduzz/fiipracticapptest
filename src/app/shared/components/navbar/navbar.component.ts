import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../account/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  account = '';
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }
  getAccount() {
    this.accountService.getAccount().subscribe(res => this.account = res[1]);
  }
}
