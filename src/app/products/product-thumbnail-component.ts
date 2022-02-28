import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-thumbnail',
    template: `
    <div [routerLink]="['/products', product.id]" class="well hoverwell thumbnail">
        <h2>{{product?.name | uppercase}}</h2>
        <div class="productSpec"><strong>Brand:</strong> {{product?.brand.name}}
        </div>
        <div class="productSpec"><strong>Gender:</strong> {{product?.gender.name}}
        </div>
        <div class="productSpec"><strong>Quantity:</strong> {{product?.quantity}}
        </div>
        <div class="productSpec"><strong>Type Of Product:</strong> {{product?.typeOfProduct.name}}
        </div>
        <div class="productSpec"><strong>Price:</strong> {{product?.price | currency:'USD'}}</div>
    </div>
    `,
    styles: [
        `
        .thumbnail {
            height: 310px;
            background-color: white;
        }
        h2 {
            color: black;
        }
        .productSpec {
            margin: 15px;
        }
        .well div {
            color: black;
        }

        `
    ]

})

export class ProductThumbnailComponent {
   @Input() product:any

}
