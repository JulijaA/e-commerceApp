import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { Error404Component } from './error/404.component';

import { ProductsListComponent } from './products/product-list-component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CreateProductComponent } from './products/create-product/create-product.component';

import { ProductListResolver } from './products/products-list-resolver.service';
import { ProductResolver } from './products/product-resolver.service';


export const appRoutes:Routes = [
  {path: 'products/new', component: CreateProductComponent, canDeactivate: ['canDeactivateCreateProduct']},
  {path: 'products', component: ProductsListComponent, resolve: {products:ProductListResolver}},
  {path: 'products/:id', component: ProductDetailComponent, resolve: {product:ProductResolver}},
  {path: 'search/:search', component: ProductsListComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {


}
