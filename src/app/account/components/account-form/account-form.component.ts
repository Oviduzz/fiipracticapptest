import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  account = {
    email: '',
    nume: '',
    prenume: '',
    linkedin: '',
    phone: '',
    school: '',
    address: '',
    aboutMe: ''
  };
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccount().subscribe(res => this.account = res[1]);
  }

  onSubmit(form: NgForm) {
    this.account = {
          email: form.value.email,
          nume: form.value.nume,
          prenume: form.value.prenume,
          linkedin: form.value.linkedin,
          phone: form.value.phone,
          school: form.value.school,
          address: form.value.address,
          aboutMe: form.value.aboutMe
        };
        console.log(form);
    //     // this.account.name = form.value.name;
    console.log(this.account);
    this.accountService.updateAccount(this.account).subscribe(res=>res);
  }
}
