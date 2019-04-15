import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../services/LoginService";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],

})
export class NavMenuComponent {
  isExpanded = false;
  router: Router
  loginService: LoginService;

  constructor(router: Router, loginService: LoginService) {
    this.router = router;
    this.loginService = loginService;
  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  LogOut() {
    this.loginService.LogOff();
    this.router.navigateByUrl("/login");
  }
}
