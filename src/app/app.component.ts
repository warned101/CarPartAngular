import { Component } from '@angular/core';
import { MyApiService } from "./services/myapi.service"
import { Comment } from "./serviceclass/comment"
import { Post } from './serviceclass/Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  comment:Comment[];
  usrData:Comment[];

  userid:string;

  retPost = new Post();

  constructor(private myApi:MyApiService){}

  title = 'ServiceDemoApp';

  ngOnInit() {
    this.myApi.getAllComments().subscribe(
      comments=>{
         console.log(comments);
        // this.comment = comments;
      }
    );


    var post = new Post();
    post.body="This is post body";
    post.title="Thisis title";
    post.userId=5;

    this.myApi.postComment(post).subscribe(
      data=>{
        this.retPost = data;
        console.log(this.retPost);
      }
    );

  }


  userIdData() {
    this.myApi.getCommentsByUserId(this.userid).subscribe(
      idData=>{
        console.log(idData);
        this.usrData = idData;
      }
    );
  }
}
