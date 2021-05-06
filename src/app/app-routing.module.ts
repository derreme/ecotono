import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CompanyComponent } from './company/company.component';
import { CreationProcessComponent } from './creation-process/creation-process.component';
import { EnviromentalComponent } from './enviromental/enviromental.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'creation', component: CreationProcessComponent},
  {path: 'enviromental', component: EnviromentalComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'#', pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
