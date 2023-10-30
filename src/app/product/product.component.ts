import { Component } from '@angular/core';
import { IProduct } from 'src/interfaces/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product!: IProduct;
  constructor(private prodServ: ProductsService, private activatedRoute: ActivatedRoute){

  }
  
  id!: number;

  ngOnInit(){
    // this.id = 
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
    })

    let idx: number = this.prodServ.getProductById(this.id);

    if (idx != -1){
      this.product = this.prodServ.products[idx]
    }
  }
}
