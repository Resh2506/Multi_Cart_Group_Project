import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchComponent } from './search/search.component';
import { TypogrophyNewComponent } from './typogrophy-new/typogrophy-new.component';
import { ReviewComponent } from './review/review.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CollectionComponent } from './collection/collection.component';
import { LookBookComponent } from './look-book/look-book.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { FourComponent } from './four/four.component';
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';
import { FAQComponent } from './faq/faq.component';
import { VendorDashComponent } from './Vendor/vendor-dash/vendor-dash.component';
import { VendorProfileComponent } from './Vendor/vendor-profile/vendor-profile.component';
import { BecomeVendorComponent } from './Vendor/become-vendor/become-vendor.component';
import { WhishlistComponent } from './Account/whishlist/whishlist.component';
import { CartComponent } from './Account/cart/cart.component';
import { DashbordComponent } from './Account/dashbord/dashbord.component';
import { LoginComponent } from './Account/login/login.component';
import { LoginAuthComponent } from './Account/login-auth/login-auth.component';
import { RegisterComponent } from './Account/register/register.component';
import { ForgetPassComponent } from './Account/forget-pass/forget-pass.component';
import { ProfileComponent } from './Account/profile/profile.component';
import { CheckOutComponent } from './Account/check-out/check-out.component';
import { CompareComponent } from './Compare/compare/compare.component';
import { CompareTwoComponent } from './Compare/compare-two/compare-two.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './Account/contact/contact.component';

const route:Routes=[
  {path:'v-dash',component:VendorDashComponent},
  {path:'v-profile',component:VendorProfileComponent},
  {path:'become-v',component:BecomeVendorComponent},
  {path:'wish',component:WhishlistComponent},
  {path:'cart',component:CartComponent},
  {path:'dash',component:DashbordComponent},
  {path:'login',component:LoginComponent},
  {path:'login-auth',component:LoginAuthComponent},
  {path:'reg',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'for-pass',component:ForgetPassComponent},
  {path:'profile',component:ProfileComponent},
  {path:'check-out',component:CheckOutComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'search',component:SearchComponent},
  {path:'typo',component:TypogrophyNewComponent},
  {path:'review',component:ReviewComponent},
  {path:'order-s',component:OrderSuccessComponent},
  {path:'compare',component:CompareComponent},
  {path:'compare-2',component:CompareTwoComponent},
  {path:'collection',component:CollectionComponent},
  {path:'lookbook',component:LookBookComponent},
  {path:'site-map',component:SiteMapComponent},
  {path:'404',component:FourComponent},
  {path:'comin-soon',component:CoomingSoonComponent},
  {path:'FAQ',component:FAQComponent},
]


@NgModule({
  declarations: [
    AboutUsComponent,
    SearchComponent,
    TypogrophyNewComponent,
    ReviewComponent,
    OrderSuccessComponent,
    CollectionComponent,
    LookBookComponent,
    SiteMapComponent,
    FourComponent,
    CoomingSoonComponent,
    FAQComponent,
    VendorDashComponent,
    VendorProfileComponent,
    BecomeVendorComponent,
    WhishlistComponent,
    CartComponent,
    DashbordComponent,
    LoginComponent,
    LoginAuthComponent,
    RegisterComponent,
    ForgetPassComponent,
    ProfileComponent,
    CheckOutComponent,
    CompareComponent,
    CompareTwoComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
