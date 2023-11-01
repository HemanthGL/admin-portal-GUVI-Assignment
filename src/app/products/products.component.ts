import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from 'src/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products!: Array<IProduct>;
  constructor(private router: Router, private productServ: ProductsService){
    this.products = productServ.products

  }

  /**
   * 
   * @param event Clicking the Edit Product Button
   * @description To Handle Edit Product Button event
   */
  editProduct(event: MouseEvent){
    let id:string = (event.target as HTMLInputElement).id

    let prodIdx: number = parseInt(id.substring(5))
    this.router.navigate(['/product/edit/'+ prodIdx])
  }

  /**
   * 
   * @param event Click event of View Button of Product
   * @description To Handle View Product Button event
   */
  viewProduct(event: MouseEvent){
    let id:string = (event.target as HTMLInputElement).id

    let prodIdx: number = parseInt(id.substring(5))
    this.router.navigate(['/product/'+ prodIdx])
  }

  /**
   * @description to Add More Products to the list [Button event Handler]
   */
  addProduct():void{
    this.router.navigate(['product/create'])
  }
  
}
