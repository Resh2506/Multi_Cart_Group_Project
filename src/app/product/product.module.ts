import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourImageComponent } from './four-image/four-image.component';
import { BundleProductComponent } from './bundle-product/bundle-product.component';
import { StickyComponent } from './sticky/sticky.component';
import { AccordianComponent } from './accordian/accordian.component';
import { ImageComponent } from './image/image.component';

import { VerticalTabComponent } from './vertical-tab/vertical-tab.component';
// import { LeftComponent } from './SideBar/left/left.component';
import { RightComponent } from './SideBar/right/right.component';
import { NoComponent } from './SideBar/no/no.component';
import { LeftImageComponent } from './Thumnail/left-image/left-image.component';
import { RightImageComponent } from './Thumnail/right-image/right-image.component';
import { ImageOutsideComponent } from './Thumnail/image-outside/image-outside.component';
import { ThumbnailRightComponent } from './Three-coloumn/thumbnail-right/thumbnail-right.component';
import { ThumbnailLeftComponent } from './Three-coloumn/thumbnail-left/thumbnail-left.component';
import { ThumbnailBottomComponent } from './Three-coloumn/thumbnail-bottom/thumbnail-bottom.component';
import { RouterModule, Routes } from '@angular/router';
import { LeftSideBarComponent } from '../shop/left-side-bar/left-side-bar.component';
import { LeftComponent } from './SideBar/left/left.component';
import { NoSideBarComponent } from '../shop/no-side-bar/no-side-bar.component';

const route:Routes=[
  {path:'side-left',component:LeftSideBarComponent},
  {path:'side-right',component:RightComponent},
  {path:'side-no',component:NoSideBarComponent},
  {path:'left-image',component:LeftImageComponent},
  {path:'right-image',component:RightComponent},
  {path:'outside-image',component:ImageOutsideComponent},
  {path:'thumbanial-left',component:ThumbnailLeftComponent},
  {path:'thumbanial-rigtht',component:ThumbnailRightComponent},
  {path:'thumbnail-bottom',component:ThumbnailBottomComponent},
  {path:'four-image',component:FourImageComponent},
  {path:'bundle-product',component:BundleProductComponent},
  {path:'sticky',component:StickyComponent},
  {path:'accordian',component:AccordianComponent},
  {path:'image-swatch',component:ImageComponent},
  {path:'vertical-tab',component:VerticalTabComponent},

]


@NgModule({
  declarations: [
    FourImageComponent,
    BundleProductComponent,
    StickyComponent,
    AccordianComponent,
    ImageComponent,
    VerticalTabComponent,
    LeftComponent,
    RightComponent,
    NoComponent,
    LeftImageComponent,
    RightImageComponent,
    ImageOutsideComponent,
    ThumbnailRightComponent,
    ThumbnailLeftComponent,
    ThumbnailBottomComponent
  ],
  imports: [
    CommonModule,
[RouterModule.forChild(route)]
  ]
})
export class ProductModule { }
