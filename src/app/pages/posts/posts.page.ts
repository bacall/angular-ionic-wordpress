import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  providers: [PostsService]
})
export class PostsPage implements OnInit {
  public categories!: any[];
  constructor(private _postsService: PostsService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let categorieParam= params['categorieid'];
    this._postsService.getPostsByCategories(categorieParam).subscribe(
      {
        next: response => {
          this.categories = Object.values(response);
          console.log(this.categories);
        },
        error: err => {
          console.log(err.error.msg);
        }
      });
    });
  }


}
