import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ProductListResolver } from './products/products-list-resolver.service';
import { ProductsListComponent } from './products/product-list-component';
import { ProductThumbnailComponent } from './products/product-thumbnail-component';
import  { ProductService } from './products/shared/product.service';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { CreateProductComponent } from './products/create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes, AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error/404.component';
import { AuthService } from './user/login/auth.service';
import { HttpClientModule } from '@angular/common/http'
import { ProductResolver } from './products/product-resolver.service';
import { UserModule } from './user/user.module';
import { CartComponent } from './products/cart/cart.component';
import { CartService } from './products/shared/cart.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductThumbnailComponent,
    ProductDetailComponent,
    CreateProductComponent,
    Error404Component,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    UserModule,
    JwtModule.forRoot({
      config: {
       tokenGetter: tokenGetter,
      allowedDomains: ["localhost:44356", "foo.com", "bar.com"]
      },
      }),
  ],
  providers: [
    ProductListResolver,
    ProductService,
    CartService,
    ProductResolver,
    AuthService,

    {
      provide: 'canDeactivateCreateProduct',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function checkDirtyState(component:CreateProductComponent) {
  if(component.isDirty) {
    return window.confirm('you have not saved this product, do you really want to cancel?')
  }
  return true;
}
