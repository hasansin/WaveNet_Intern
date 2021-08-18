import { Injectable } from "@angular/core";
import { Post } from "./post";
import { concat, Observable, of } from "rxjs";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  // We use a websocket to receive a stream of data from the server
  postsWebSocket: WebSocketSubject<Post>;

  constructor() {
    this.postsWebSocket = webSocket("ws://localhost:8000");
  }

  getPosts(): Observable<Post> {
    let post: Post = {
      postId: 1212,
      id: 232,
      name: "me",
      email: "A@me.com",
      body: "Hi its me",
    };
    return concat(of(post), this.postsWebSocket.asObservable());
  }
}
