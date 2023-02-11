import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  providers: [PostsService]
})
export class PostPage implements OnInit {
  public post!: any[];
  constructor(private _postsService: PostsService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let postParam = params['slug'];
      this._postsService.getPostBySlug(postParam).subscribe(
        {
          next: response => {
            this.post = Object.values(response);
            console.log(this.post);
          },
          error: err => {
            console.log(err.error.msg);
          }
        });
    });
  }


}
