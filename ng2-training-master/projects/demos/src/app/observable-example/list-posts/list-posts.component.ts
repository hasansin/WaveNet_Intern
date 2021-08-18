import { Component } from "@angular/core";
import { Post } from "./post";
import { PostsService } from "./posts.service";
import { filter, map } from "rxjs/internal/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-posts",
  templateUrl: "./list-posts.component.html",
  styleUrls: ["./list-posts.component.css"],
})
export class ListPostsComponent {
  posts: Post[] = [];
  emails: string[] = [];
  subscripstion: Subscription;

  constructor(private postService: PostsService) {
    // We get an observable from PostService and subscribe to it
    this.subscripstion = this.postService
      .getPosts()
      .pipe(
        map((post) => post.email),
        filter((email) => email.startsWith("A"))
      )
      .subscribe((email) => this.emails.push(email));
  }

  Unsubscribe() {
    this.subscripstion.unsubscribe();
  }

  subscribeToEmailStream() {
    this.postService
      .getPosts()
      .pipe(
        // Here we use map to only keep the email out of each post
        map((post) => post.email)
        // We thus subscribe to a stream of emails instead of posts
      )
      .subscribe((email) => this.emails.push(email));
  }
}
