import { Component } from '@angular/core';
import { IProduct } from 'src/interfaces/product';
import { ProductsService } from '../services/products.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products: Array<IProduct> = [];

  constructor(private prodServe : ProductsService, private router: Router){
    let data: string | null = localStorage.getItem('cart')
    
    if (data != null){
      let cartIds : Array<number> = JSON.parse(data)

      for (let id of cartIds){
        this.products.push(
          prodServe.products.find((prod : IProduct) => prod.id == id)!
        )
      }

    } else {
      alert('Cart is empty, Redirecting to Market...')
      router.navigate(['/market'])
    }


  }

  ngOnInit(){
    
  }
}
