import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NoSideBarComponent } from './no-side-bar/no-side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { SideBarPopUpComponent } from './side-bar-pop-up/side-bar-pop-up.component';
import { MetroNewComponent } from './metro-new/metro-new.component';
import { FullWitdthNewComponent } from './full-witdth-new/full-witdth-new.component';
import { ThreeGridComponent } from './three-grid/three-grid.component';
import { SixGridComponent } from './six-grid/six-grid.component';
import { LastViewComponent } from './last-view/last-view.component';


const route:Routes=[
  {path:'left',component:LeftSideBarComponent},
  {path:'right',component:RightSidebarComponent},
  {path:'no',component:NoSideBarComponent},
  {path:'sidebar',component:SideBarPopUpComponent},
  {path:'metro',component:MetroNewComponent},
  {path:'full',component:FullWitdthNewComponent},
  {path:'three',component:ThreeGridComponent},
  {path:'six',component:SixGridComponent},
  {path:'last',component:LastViewComponent}
]


@NgModule({
  declarations: [
    LeftSideBarComponent,
    RightSidebarComponent,
    NoSideBarComponent,
    SideBarPopUpComponent,
    MetroNewComponent,
    FullWitdthNewComponent,
    ThreeGridComponent,
    SixGridComponent,
    LastViewComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class ShopModule { }
