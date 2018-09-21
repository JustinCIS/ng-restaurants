import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataViewModule } from 'primeng/dataview';
import { GMapModule } from 'primeng/gmap';
import { SidebarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    DataViewModule,
    GMapModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
