import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./services/LoginService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  IsLoggedIn = false;
  loginService: LoginService

  constructor(private router: Router, loginService: LoginService) {
    this.loginService = loginService;
    let id = sessionStorage.getItem("id");
    if (id != null) {
      this.loginService.LogIn(id);
      router.navigateByUrl("/");
    }

    this.loginService.IsLogged().subscribe(result => { this.IsLoggedIn = result; })
  }
}
