import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './Portfolio/portfolio/portfolio.component';
import { PortfolioGridThreeComponent } from './Portfolio/portfolio-grid-three/portfolio-grid-three.component';
import { PortfolioGridFourComponent } from './Portfolio/portfolio-grid-four/portfolio-grid-four.component';
import { MasonryGridTwoComponent } from './Portfolio/masonry-grid-two/masonry-grid-two.component';
import { MasonryGridThreeComponent } from './Portfolio/masonry-grid-three/masonry-grid-three.component';
import { MasonryGridFourComponent } from './Portfolio/masonry-grid-four/masonry-grid-four.component';
import { MasonryGridFullWidthComponent } from './Portfolio/masonry-grid-full-width/masonry-grid-full-width.component';
import { CartModelPopupComponent } from './Cart/cart-model-popup/cart-model-popup.component';
import { QtytCounterComponent } from './Cart/qtyt-counter/qtyt-counter.component';
import { CartTopComponent } from './Cart/cart-top/cart-top.component';
import { CartBottomComponent } from './Cart/cart-bottom/cart-bottom.component';
import { CartLeftComponent } from './Cart/cart-left/cart-left.component';
import { CartRightComponent } from './Cart/cart-right/cart-right.component';
import { TitleComponent } from './Theme-Element/title/title.component';
import { CollectionBannerComponent } from './Theme-Element/collection-banner/collection-banner.component';
import { HomeSliderComponent } from './Theme-Element/home-slider/home-slider.component';
import { CategeoryComponent } from './Theme-Element/categeory/categeory.component';
import { ServiceComponent } from './Theme-Element/service/service.component';
import { ProductBoxComponent } from './Product-Eelement/product-box/product-box.component';
import { ProductSliderComponent } from './Product-Eelement/product-slider/product-slider.component';
import { NoSliderComponent } from './Product-Eelement/no-slider/no-slider.component';
import { MultiSliderComponent } from './Product-Eelement/multi-slider/multi-slider.component';
import { TabComponent } from './Product-Eelement/tab/tab.component';
import { OrderSuccessComponent } from './Email-Template/order-success/order-success.component';
import { OrderSuccessTwoComponent } from './Email-Template/order-success-two/order-success-two.component';
import { Route, RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'port',component:PortfolioComponent},
  {path:'port-3',component:PortfolioGridThreeComponent},
  {path:'port-4',component:PortfolioGridFourComponent},
  {path:'mas-2',component:MasonryGridTwoComponent},
  {path:'mas-3',component:MasonryGridThreeComponent},
  {path:'mas-4',component:MasonryGridFourComponent},
  {path:'mas-f',component:MasonryGridFullWidthComponent},
  {path:'cart-m',component:CartModelPopupComponent},
  {path:'qty-c',component:QtytCounterComponent},
  {path:'cart-t',component:CartTopComponent},
  {path:'cart-b',component:CartBottomComponent},
  {path:'cart-l',component:CartLeftComponent},
  {path:'cart-r',component:CartRightComponent},
  {path:'title',component:TitleComponent},
  {path:'banner',component:CollectionBannerComponent},
  {path:'home-slider',component:HomeSliderComponent},
  {path:'cate',component:CategeoryComponent},
  {path:'ser',component:ServiceComponent},
  {path:'product-box',component:ProductBoxComponent},
  {path:'product-slider',component:ProductSliderComponent},
  {path:'no-Slider',component:NoSliderComponent},
  {path:'mutli-slider',component:MultiSliderComponent},
  {path:'tab',component:TabComponent},
  {path:'order-su',component:OrderSuccessComponent},
  {path:'order-2',component:OrderSuccessTwoComponent},

]

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioGridThreeComponent,
    PortfolioGridFourComponent,
    MasonryGridTwoComponent,
    MasonryGridThreeComponent,
    MasonryGridFourComponent,
    MasonryGridFullWidthComponent,
    CartModelPopupComponent,
    QtytCounterComponent,
    CartTopComponent,
    CartBottomComponent,
    CartLeftComponent,
    CartRightComponent,
    TitleComponent,
    CollectionBannerComponent,
    HomeSliderComponent,
    CategeoryComponent,
    ServiceComponent,
    ProductBoxComponent,
    ProductSliderComponent,
    NoSliderComponent,
    MultiSliderComponent,
    TabComponent,
    OrderSuccessComponent,
    OrderSuccessTwoComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class FeaturesModule { }
