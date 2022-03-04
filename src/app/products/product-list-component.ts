import { Component, OnInit } from "@angular/core";
import { ProductService } from "./shared/product.service";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "./shared/product.model";


@Component({
    selector: 'products-list',
    template: `
    <div class="container" style="color: black">
        <h1>All Products</h1>
        <form id="searchForm" class="navbar-form ">
                <div class="form-group">
                    <input name="searchName" type="text" [(ngModel)]="searchTerm" class="form-control" placeholder="Search By Name">
                </div>

            </form>

            <hr />
        <div>

            </div>
        <div class="row">
            <div class="col-md-4" *ngFor="let product of filteredProducts">
                <product-thumbnail [product]="product">

                </product-thumbnail>
            </div>
        </div>

    </div>
    `
})

export class ProductsListComponent implements OnInit {

    productList:IProduct[] = []
    filteredProducts: IProduct[] = [];
    private _searchTerm!: string;

    get searchTerm(): string {
        return this._searchTerm;
    }
    set searchTerm(value: string) {
        this._searchTerm = value;
        this.filteredProducts = this.filterProducts(value);
    }

    filterProducts(searchString: string) {
        return this.productList.filter(product => product.name.toLocaleLowerCase().indexOf(searchString.toLowerCase()) !== -1)
    }

    constructor(private productService: ProductService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.productList = this.route.snapshot.data['products']
        this.productService.getProducts().subscribe((data: IProduct[]) => {
          console.log(data);
          this.productList = data;

        })
        this.filteredProducts = this.productList;

    }

}

