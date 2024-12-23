import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDemoComponent } from './new-demo/new-demo.component';
import { ToolsComponent } from './new-demo/tools/tools.component';
import { ChristmasComponent } from './new-demo/christmas/christmas.component';
import { MarketPlaceComponent } from './new-demo/market-place/market-place.component';
import { GameComponent } from './new-demo/game/game.component';
import { RouterModule, Routes } from '@angular/router';
import { FashionOneComponent } from './clothing/fashion-one/fashion-one.component';
import { FashionTwoComponent } from './clothing/fashion-two/fashion-two.component';
import { FashionThreeComponent } from './clothing/fashion-three/fashion-three.component';
import { KidsComponent } from './clothing/kids/kids.component';
import { LookbookComponent } from './Basic/lookbook/lookbook.component';
import { VideoComponent } from './Basic/video/video.component';
import { ParallexComponent } from './Basic/parallex/parallex.component';
import { FullPageComponent } from './Basic/full-page/full-page.component';
import { ElectronicOneComponent } from './Electronic/electronic-one/electronic-one.component';
import { ElectronicTwoComponent } from './Electronic/electronic-two/electronic-two.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { WatchComponent } from './watch/watch.component';
import { LightsComponent } from './lights/lights.component';
import { GogglesComponent } from './goggles/goggles.component';
import { ShooesComponent } from './shooes/shooes.component';
import { BagsComponent } from './bags/bags.component';
import { FlowersComponent } from './flowers/flowers.component';

const route: Routes = [

  // {
  //   path: 'new', component: NewDemoComponent,
  //   children: [
  //     { path: 'tools', component: ToolsComponent },
  //     { path: 'chritsmas', component: ChristmasComponent },
  //     { path: 'market', component: MarketPlaceComponent },
  //     { path: 'game', component: GameComponent }
  //   ]
  // }


  {path:'home',component:NewDemoComponent},
  {path:'tools',component:ToolsComponent},
  {path:'chritsmas',component:ChristmasComponent},
  {path:'market',component:MarketPlaceComponent},
  {path:'game',component:GameComponent},
  {path:'fashion-1',component:FashionOneComponent},
  {path:'fashion-2',component:FashionTwoComponent},
  {path:'fashion-3',component:FashionThreeComponent},
  {path:'kids',component:KidsComponent},
  {path:'lookbook',component:LookbookComponent},
  {path:'parellex',component:ParallexComponent},
  {path:'video',component:VideoComponent},
  {path:'full-page',component:FullPageComponent},
  {path:'electronic',component:ElectronicOneComponent},
  {path:'electronic-2',component:ElectronicTwoComponent},
  {path:'beauty',component:BeautyComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'veg',component:VegetablesComponent},
  {path:'watch',component:WatchComponent},
  {path:'light',component:LightsComponent},
  {path:'goggle',component:GogglesComponent},
  {path:'shoes',component:ShooesComponent},
  {path:'bags',component:BagsComponent},
  {path:'flowers',component:FlowersComponent},

]


@NgModule({
  declarations: [
    NewDemoComponent,
    ToolsComponent,
    ChristmasComponent,
    MarketPlaceComponent,
    GameComponent,
    FashionOneComponent,
    FashionTwoComponent,
    FashionThreeComponent,
    KidsComponent,
    LookbookComponent,
    VideoComponent,
    ParallexComponent,
    FullPageComponent,
    ElectronicOneComponent,
    ElectronicTwoComponent,
    BeautyComponent,
    FurnitureComponent,
    VegetablesComponent,
    WatchComponent,
    LightsComponent,
    GogglesComponent,
    ShooesComponent,
    BagsComponent,
    FlowersComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]

  ]
})
export class HomeModule { }
