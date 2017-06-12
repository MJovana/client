import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { SimpleData } from "./services/simple-data.service";
import { HttpProductService } from './services/http.service';
import { UserService } from './registration/user.service';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { Simple2Component } from './simple2/simple2.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AccommodationTypesComponent } from './accommodation-types/accommodation-types.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AccommodationTypeDetailsComponent } from './accommodation-type-details/accommodation-type-details.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { PlaceComponent } from './place/place.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { RegionComponent } from './region/region.component';
import { RegionDetailsComponent } from './region-details/region-details.component';
import { RoomReservationsComponent } from './room-reservations/room-reservations.component';
import { RoomReservationsDetailsComponent } from './room-reservations-details/room-reservations-details.component';
import { RoomComponent } from './room/room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RegistrationComponent } from './registration/registration.component';


const Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "product", component: ProductComponent},
  {path: "acTypes", component: AccommodationTypesComponent},
  {path: "product/:Id", component: ProductDetailsComponent},
  {path: "acTypes/:Id", component: AccommodationTypeDetailsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    Simple2Component,
    ProductComponent,
    HomeComponent,
    ProductDetailsComponent,
    AccommodationTypesComponent,
    AccommodationComponent,
    AccommodationTypeDetailsComponent,
    CommentComponent,
    CommentDetailsComponent,
    AccommodationDetailsComponent,
    PlaceComponent,
    PlaceDetailsComponent,
    RegionComponent,
    RegionDetailsComponent,
    RoomReservationsComponent,
    RoomReservationsDetailsComponent,
    RoomComponent,
    RoomDetailsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [SimpleData, HttpProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
