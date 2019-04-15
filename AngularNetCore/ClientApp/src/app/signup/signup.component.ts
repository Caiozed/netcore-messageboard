import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../Models/User";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  User = new User("", "", "");
  http: HttpClient;
  baseUrl: string;
  router: Router;

  constructor(
    router: Router,
    http: HttpClient,
    @Inject("BASE_URL") baseUrl: string
  ) {
    this.router = router;
    this.http = http;
    this.baseUrl = baseUrl;
  }

  Signup() {
    this.http
      .post(this.baseUrl + "api/Users", JSON.stringify(this.User), {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .subscribe(result => this.router.navigateByUrl("/"), error => console.log(error));
  }
  ngOnInit() { }
}
