import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpCommentService } from '../services/http.commentService';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  Id: string = "-1";
  isLoading: boolean = true;
  comment: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpCommentService: HttpCommentService) {
    activatedRoute.params.subscribe( params => { this.fetchProduct(params) });
   }

  ngOnInit() {
  }

  fetchProduct(params: any){
    this.Id = params["Id"];
    this.httpCommentService.getOneComment(this.Id).subscribe(
      (res: Response) => 
        {
          this.comment = res;
          console.log(this.comment)
          this.isLoading = false;
        }
    );
  }

}
