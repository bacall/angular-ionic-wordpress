import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPageRoutingModule } from './posts-routing.module';

import { PostsPage } from './posts.page';
import { ComponentsModule } from "../../components/components.module";
import { SharedpipesModule } from '../../sharedpipes/sharedpipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    ComponentsModule,
    SharedpipesModule
  ],
  declarations: [PostsPage]
})
export class PostsPageModule {}
