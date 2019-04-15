import { User } from "./User";
import { Comment } from "./Comment";

export class Post {
    id: Number;
    userId: Number;
    message: string;
    date: Date;
    expanded: boolean;
    user: User;
    comments: Array<Comment>
    comment: Comment;
    constructor(Message: string = "", UserId: Number = null, id: Number = null) {
        this.id = id;
        this.expanded = false;
        this.userId = UserId;
        this.message = Message;
        this.date = new Date();
        this.comment = new Comment("Teste Comentário");
    }
}
