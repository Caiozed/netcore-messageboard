import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Models/User'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User: User;
  http: HttpClient;
  id: string;

  constructor(http: HttpClient, private route: ActivatedRoute) {
    this.http = http;
    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    this.http.get("api/Users/" + this.id).subscribe(result => {
      this.User = (result as User);
      console.log(this.User);
    }, error => console.log(error))
  }

}
