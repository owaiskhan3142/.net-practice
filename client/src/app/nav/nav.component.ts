import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService, private route: Router, private tostr: ToastrService) { }
  ngOnInit(): void {
  }


  login() {
    this.accountService.login(this.model).subscribe({
      next: () => this.route.navigateByUrl('/members',),
      error: error => this.tostr.error(error.error)
    })
  }

  logout() {
    this.accountService.logout();
    this.route.navigateByUrl('/');
  }

}
