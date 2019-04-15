import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../Models/User";
import { LoginService } from "../services/LoginService";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],

})
export class LoginComponent implements OnInit {
  User = new User();
  http: HttpClient;
  baseUrl: string;
  loginService: LoginService;

  constructor(
    private router: Router,
    http: HttpClient,
    loginService: LoginService,
    @Inject("BASE_URL") baseUrl: string
  ) {
    this.loginService = loginService;
    this.http = http;
    this.baseUrl = baseUrl;
    http
      .get(baseUrl + "api/Users")
      .subscribe(result => console.log(result), error => console.log(error));
  }

  Login() {
    this.http
      .post(this.baseUrl + "api/users/login", JSON.stringify(this.User), {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .subscribe(
        result => {
          if (result != null) {
            var user = (result as User);
            this.loginService.LogIn(user.id.toString());
            this.router.navigate(["/"]);
          } else {
            console.log(result);
          }
        },
        error => console.log(error)
      );
  }

  ngOnInit() { }
}
