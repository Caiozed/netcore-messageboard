import { User } from "./User";
import { Post } from "./Post";

export class Comment {
    id: Number;
    date: Date;
    message: String;
    user: User;
    post: Post;
    userId: Number;
    postId: Number;
    constructor(Message: string = "", UserId: Number = null, id: Number = null) {
        this.id = id;
        this.message = Message;
        this.date = new Date();
    }
}