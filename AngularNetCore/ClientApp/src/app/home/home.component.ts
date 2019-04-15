import { Component, OnInit, Inject, CollectionChangeRecord } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Post } from "../Models/Post";
import { User } from "../Models/User";
import { Comment } from "../Models/Comment";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.css"],
  templateUrl: "./home.component.html"
})

export class HomeComponent {
  http: HttpClient;
  baseUrl: string;
  Post: Post = new Post("Make a wish!", Number.parseInt(sessionStorage.getItem("id")));
  Posts: Array<Post>;
  User: User;
  Router: Router

  constructor(
    private router: Router,
    http: HttpClient,
    @Inject("BASE_URL") baseUrl: string
  ) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.Router = router;

    if (sessionStorage.getItem("id") == null) {
      this.Router.navigateByUrl("/login");
    }

    this.http.get(this.baseUrl + "api/Users/" + sessionStorage.getItem("id")).subscribe(result => {
      this.User = result as User;
    }, error => console.log(error));

    this.http.get(this.baseUrl + "api/Posts").subscribe(result => {
      this.Posts = result as Array<Post>;
      this.Posts.forEach(element => {
        element.comment = new Comment("Write a wish!");
        element.comments = new Array<Comment>();
      });
    }, error => console.log(error));
  }

  //Save new post
  SendPost() {
    this.http
      .post(this.baseUrl + "api/Posts", JSON.stringify(this.Post), {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .subscribe(result => {
        var post = (result as Post);
        post.comment = new Comment("");
        this.Posts.push((result as Post));
      }, error => console.log(error));
  }

  //Save new comment
  SendComment(post: Post) {
    post.comment.postId = post.id;
    post.comment.userId = Number.parseInt(sessionStorage.getItem("id"));
    this.http
      .post(this.baseUrl + "api/Comments", JSON.stringify(post.comment), {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .subscribe(result => {
        post.comments.push((result as Comment))
        post.comment.message = "";
      },
        error => console.log(error));
  }

  //Get comments
  GetComments(post: Post) {
    post.expanded = !post.expanded;

    if (!post.expanded) { post.comments = new Array<Comment>(); return; };

    this.http
      .get(this.baseUrl + "api/Posts/" + post.id + "/Comments")
      .subscribe(result => { post.comments = (result as Post).comments; }, error => console.log(error));
  }
}
