import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductService } from "./shared/product.service";

@Injectable()
export class ProductResolver implements Resolve<any> {
    constructor(private productService:ProductService) {

    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.productService.getProduct(route.params['id'])
    }
}