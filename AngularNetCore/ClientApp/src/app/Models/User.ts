import { Post } from "./Post";
import { Comment } from "./Comment";

export class User {
  id: Number;
  login: string;
  username: string;
  password: string;
  posts: Array<Post>;
  comments: Array<Comment>;
  constructor(login: string = "", username = "", password: string = "", id: Number = null) {
    this.id = id;
    this.username = username;
    this.login = login;
    this.password = password;
  }
}
