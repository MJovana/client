import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpCommentService } from '../services/http.commentService';
import { HttpAccommodationService } from '../services/http.accommodationService';
import { UserService } from '../services/user.service';
import {Comment} from './comment.model';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [HttpCommentService]
})
export class CommentComponent implements OnInit {

  comments : Object [];
  comment : Comment;
  accommodations : Object[];
  users : Object[];
  id: string;

  constructor(private httpCommentService: HttpCommentService,
              private httpAccommodationService: HttpAccommodationService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.httpCommentService.getComments().subscribe((res: Response) => 
    {this.comments = res.json(); console.log(this.comments)});
   
   //id od accommodationa
   this.httpAccommodationService.getAC().subscribe(c => this.accommodations = c.json(), error => 
   {console.log(error), alert("Unsuccessfull fetch operation")});

   //id od usera
   /*this.userService.getUsers().subscribe(c => this.users = c.json(), error => 
    { console.log(error), alert("Unsuccessfull fetch operation")});*/
  }

  onCancel() {
      this.router.navigate(['/admin']);
  }

  addComment(newComment: Comment, form: NgForm) : void{
      this.id = localStorage.getItem('id');
      newComment.UserId = parseInt(this.id);
      this.httpCommentService.postComment(newComment).subscribe(this.onPost);
      form.reset();
    }    

    deleteComment(id: number) {
      this.httpCommentService.delete(id).subscribe(() => {this.refresh(); });
    }

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

    refresh() {
       this.httpCommentService.getComments().subscribe((res: Response) => 
       {this.comments = res.json(); console.log(this.comments)});
    }
}
