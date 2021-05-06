import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnviromentalComponent } from './enviromental/enviromental.component';
import { CompanyComponent } from './company/company.component';
import { CreationProcessComponent } from './creation-process/creation-process.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnviromentalComponent,
    CompanyComponent,
    CreationProcessComponent,
    CatalogueComponent,
    ShoppingCartComponent,
    LoginComponent,
    SearchComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
