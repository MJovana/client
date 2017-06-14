import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpCommentService } from '../services/http.commentService'
import {Comment} from './comment.model'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
   providers: [HttpCommentService]
})
export class CommentComponent implements OnInit {

  comments : Object [];
  comment : Comment;

  constructor(private httpCommentService: HttpCommentService) { }

  ngOnInit() {
   this.httpCommentService.getComments().subscribe((res: Response) => 
   {this.comments = res.json(); console.log(this.comments)});
  }

  addComment(newComment: Comment, form: NgForm) : void{
      this.httpCommentService.postComment(newComment).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }
}
