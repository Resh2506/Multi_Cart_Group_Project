import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLeftSidebarComponent } from './b-left-sidebar/b-left-sidebar.component';
import { BRightSidebarComponent } from './b-right-sidebar/b-right-sidebar.component';
import { BNoSidebarComponent } from './b-no-sidebar/b-no-sidebar.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NoSideBarComponent } from '../shop/no-side-bar/no-side-bar.component';

const route:Routes=[
  {path:'b-left',component:BLeftSidebarComponent},
  {path:'b-right',component:BRightSidebarComponent},
  {path:'no-bar',component:NoSideBarComponent},
  {path:'b-detail',component:BlogDetailsComponent}
]

@NgModule({
  declarations: [
    BLeftSidebarComponent,
    BRightSidebarComponent,
    BNoSidebarComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class BlogsModule { }
