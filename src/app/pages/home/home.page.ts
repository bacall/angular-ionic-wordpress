import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Global } from 'src/app/services/homepage';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [PostsService]
})
export class HomePage implements OnInit {
  public portadas!: [];
  public portada!: any[];
  public homepage!: string;
  public ishomepage!: number;
  constructor(private _postsService: PostsService) { 
    this.homepage= Global.homepage;
  }

  ngOnInit(): void {
    this._postsService.getHome().subscribe(
      {
        next: response => {
          this.portada = Object.values(response);
          for( var i=0; i<this.portada.length; i++ ){
            if(this.portada[i]['link']!=this.homepage){
              this.portada.splice(i, 1);
              i=0;
            } 
          }
          console.log(this.portada);
        },
        error: err => {
          console.log(err.error.msg);
        }
      }
    );

  }

}
