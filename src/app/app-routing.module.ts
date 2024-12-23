import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDemoComponent } from './home/new-demo/new-demo.component';
import { ToolsComponent } from './home/new-demo/tools/tools.component';
import { ChristmasComponent } from './home/new-demo/christmas/christmas.component';
import { MarketPlaceComponent } from './home/new-demo/market-place/market-place.component';
import { GameComponent } from './home/new-demo/game/game.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'shop',
      loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
    {path:'product',
      loadChildren:()=> import('./product/product.module').then(m=>m.ProductModule)
    },
    {path:'feature',
      loadChildren:()=>import('./features/features.module').then(m=>m.FeaturesModule)
    },
    {path:'blog',
      loadChildren:()=>import('./blogs/blogs.module')
      .then(m=>m.BlogsModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
